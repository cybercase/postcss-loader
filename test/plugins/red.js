var warning = false;

module.exports = {
    postcss: function (css, result) {
        if ( !warning ) {
            result.warn('Test red warning');
            warning = true;
        }

        css.eachDecl(function (decl) {
            if ( decl.value === 'blue' ) decl.value = 'red';
        });
    }
};
