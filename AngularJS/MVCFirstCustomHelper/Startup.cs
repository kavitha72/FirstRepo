using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCFirstCustomHelper.Startup))]
namespace MVCFirstCustomHelper
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
