module.exports = {
    encrypt: function(text, key) {
        const treyfer = new com.lleopardi.treyferlib.Treyfer();
        return treyfer.encrypt(text, key);
    },

    decrypt: function(encrypted, key) {
        const treyfer = new com.lleopardi.treyferlib.Treyfer();
        return treyfer.decrypt(encrypted, key);
    }
};
