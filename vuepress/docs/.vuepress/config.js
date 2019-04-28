module.exports = {
  head: [["link", { rel: "icon", href: `/new2.png` }]], //被注入页面 HTML <head> 额外的标签
  host: "0.0.0.0", //访问路径
  port: "5555", //端口
  dest: ".vuepress/dist", //输出目录
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "public"
      }
    }
  }, //设置别名
  locales: {
    // 每个语言对象的键(key)，是语言的访问路径。
    // 然而，一种特例是将 '/' 作为默认语言的访问路径。
    "/": {
      lang: "zh-CN", // 这个值会被设置在 <html> 的 lang 属性上
      title: "Yaya's 博客",
      description: "个人博客，文档分享"
    },
    "/en/": {
      lang: "en-US",
      title: "Yaya's blog",
      description: "Personal blog, document sharing."
    }
  }, //多语言
  //   theme: "awesome",
  themeConfig: {
    locales: {
      "/": {
        // 语言下拉菜单的展示文本
        selectText: "选择语言",
        // 该语言在下拉菜单中的 label 标签
        label: "简体中文",
        // github 编辑链接的文字
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          { text: "首页", link: "/" },
          { text: "作品", link: "/works/" },
          { text: "读书", link: "/read/" },
          { text: "关于", link: "/about" }
        ],
        sidebar: {
          "/works/": ["", "shop", "blog"],
          "/read/": ["", "shop", "blog"]
        }
      },
      "/en/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Works", link: "/en/works/" },
          { text: "Read", link: "/en/read/" },
          { text: "About", link: "/en/about" }
        ],
        sidebar: {
          "/en/works/": ["", "shop", "blog"],
          "/en/read/": ["", "shop", "blog"]
        }
      }
    }
  }
};