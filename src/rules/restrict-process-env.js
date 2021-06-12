const isProcessEnvNode = require('../utils/isProcessEnvNode');

const checkName = (name, options) => {
    if (!options) {
        return true;
    }
    const { whiteList, blackList } = options;
    if (blackList && blackList.includes(name)) {
        return false;
    }
    if (whiteList && !whiteList.includes(name)) {
        return false;
    }
    return true;
}

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "disallow several process.env.xxx",
            recommended: true,
        },
        schema: [
            {
                "type": "object",
                "properties": {
                    "whiteList": {
                        "type": "array",
                        "items": {
                            "type": "string",
                        }
                    },
                    "blackList": {
                        "type": "array",
                        "items": {
                            "type": "string",
                        }
                    }
                },
                "additionalProperties": false
            }
        ]
    },

    create(context) {
        const options = context.options && context.options[0] || {};

        const check = (property) => {
            if (!property) {
                return;
            }
            if (property.type === 'Identifier') {
                if (property.computed) {
                    return;
                }
                const name = property.name;
                if (!checkName(name, options)) {
                    context.report({
                        node: property,
                        message: `process.env.${name} is not allowed.`
                    });
                }
                return;
            }
            if (property.type === 'Literal') {
                const name = property.value;
                if (!checkName(name, options)) {
                    context.report({
                        node: property,
                        message: `process.env[${property.raw}] is not allowed.`
                    });
                }
            }
        };

        return {
            MemberExpression(node) {
                if (!isProcessEnvNode(node.object)) {
                    return;
                }
                check(node.property);
            }
        };
    }
};
