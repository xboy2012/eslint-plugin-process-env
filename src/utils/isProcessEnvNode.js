const isProcessEnvNode = (node) => {
    return (
        node &&
        node.type === 'MemberExpression' &&
        !node.computed &&
        node.object &&
        node.object.type === 'Identifier' &&
        node.object.name === 'process' &&
        node.property &&
        node.property.type === 'Identifier' &&
        node.property.name === 'env'
    );
};

module.exports = isProcessEnvNode;
