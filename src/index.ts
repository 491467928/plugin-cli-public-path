import {IPluginContext} from '@tarojs/service'

export default (ctx: IPluginContext, pluginOpts) => {
    ctx.onBuildStart(() => {
        if (ctx.runOpts.options.platform === 'h5') {
            const pathIndex = process.argv.findIndex(p => p === '--publicPath');
            if (pathIndex > -1 && pathIndex < process.argv.length - 1) {
                const publicPath = process.argv[pathIndex + 1];
                console.log('modify publicPath to:', publicPath);
                if (ctx.initialConfig.h5) {
                    ctx.modifyWebpackChain(({chain}) => {
                        chain.output.publicPath(publicPath);
                    });
                }
            }
        }
    })
}
