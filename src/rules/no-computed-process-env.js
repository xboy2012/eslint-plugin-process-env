const isProcessEnvNode = require('../utils/isProcessEnvNode');

const isComputedProperty = (property) => {
    if (!property) {
        return false;
    }
    if (property.type === 'Identifier') {
        return !!property.computed;
    }
    if (property.type === 'Literal') {
        return false;
    }
    return true;
};

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "disallow computed process.env[xxx]",
            recommended: true,
        },
    },

    create(context) {
        return {
            MemberExpression(node) {
                if (!isProcessEnvNode(node.object)) {
                    return;
                }
                if (isComputedProperty(node.property)) {
                    context.report({
                        node: node.property,
                        message: `computed process.env[...] is not allowed.`
                    });
                }
            }
        };
    }
};
