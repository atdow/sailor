/*
 * @Desc: 格式化响应数据
 */
const url_filter = function (pattern) {
    return async (ctx, next) => {
        const reg = new RegExp(pattern);
        try {
            await next();
        } catch (error) {
            ctx.status = 200;
            ctx.body = {
                errcode: error.code ? error.code : 1,
                errmsg: error.message
            };
            throw error;
        }
        if (reg.test(ctx.originalUrl)) {
            if (ctx.body && ctx.body.original) return (ctx.body = ctx.body.body);
            ctx.body = {
                success: true,
                data: ctx.body
            };
        }
    };
};

module.exports = url_filter;
