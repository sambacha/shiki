const registry = [
  {
    id: 'bat',
    scopeName: 'source.dosbatch',
    path: path.resolve(__dirname, '../data/grammars/Batch File.tmLanguage'),

    aliases: ['batch']
  },
  {
    id: 'clojure',
    scopeName: 'source.clojure',
    path: path.resolve(__dirname, '../data/grammars/Clojure.tmLanguage'),
    aliases: ['clj']
  },
  {
    id: 'coffeescript',
    scopeName: 'source.coffee',
    path: path.resolve(__dirname, '../data/grammars/coffeescript.json'),
    aliases: ['coffee']
  },
  {
    id: 'c',
    scopeName: 'source.c',
    path: path.resolve(__dirname, '../data/grammars/c.json'),
    aliases: []
  },
  {
    id: 'cpp',
    scopeName: 'source.cpp',
    path: path.resolve(__dirname, '../data/grammars/c++.json'),
    aliases: ['c++']
  },
  {
    id: 'csharp',
    scopeName: 'source.cs',
    path: path.resolve(__dirname, '../data/grammars/csharp.tmLanguage.json'),
    aliases: []
  },
  {
    id: 'css',
    scopeName: 'source.css',
    path: path.resolve(__dirname, '../data/grammars/css.plist'),
    aliases: []
  },
  {
    id: 'diff',
    scopeName: 'source.diff',
    path: path.resolve(__dirname, '../data/grammars/diff.tmLanguage'),
    aliases: []
  },
  {
    id: 'dockerfile',
    scopeName: 'source.dockerfile',
    path: path.resolve(__dirname, '../data/grammars/Dockerfile.tmLanguage'),
    aliases: ['docker']
  },
  {
    id: 'fsharp',
    scopeName: 'source.fsharp',
    path: path.resolve(__dirname, '../data/grammars/fsharp.json'),
    aliases: ['f#']
  },
  {
    id: 'git-commit',
    scopeName: 'text.git-commit',
    path: path.resolve(__dirname, '../data/grammars/git-commit.tmLanguage'),
    aliases: []
  },
  {
    id: 'git-rebase',
    scopeName: 'text.git-rebase',
    path: path.resolve(__dirname, '../data/grammars/git-rebase.tmLanguage'),
    aliases: []
  },
  {
    id: 'go',
    scopeName: 'source.go',
    path: path.resolve(__dirname, '../data/grammars/go.json'),
    aliases: []
  },
  {
    id: 'groovy',
    scopeName: 'source.groovy',
    path: path.resolve(__dirname, '../data/grammars/Groovy.tmLanguage'),
    aliases: []
  },
  {
    id: 'handlebars',
    scopeName: 'text.html.handlebars',
    path: path.resolve(__dirname, '../data/grammars/Handlebars.json'),
    aliases: ['hbs']
  },
  {
    id: 'html',
    scopeName: 'text.html.basic',
    path: path.resolve(__dirname, '../data/grammars/html.json'),
    aliases: ['htm', 'xhtml']
  },
  {
    id: 'ini',
    scopeName: 'source.properties',
    path: path.resolve(__dirname, '../data/grammars/properties.plist'),
    aliases: []
  },
  {
    id: 'properties',
    scopeName: 'source.properties',
    path: path.resolve(__dirname, '../data/grammars/properties.plist'),
    aliases: []
  },
  {
    id: 'jade',
    scopeName: 'text.jade',
    path: path.resolve(__dirname, '../data/grammars/Jade.json'),
    aliases: []
  },
  {
    id: 'java',
    scopeName: 'source.java',
    path: path.resolve(__dirname, '../data/grammars/java.json'),
    aliases: []
  },
  {
    id: 'jsx',
    scopeName: 'source.js',
    repo: 'https://github.com/microsoft/TypeScript-TmLanguage',
    license: 'https://github.com/microsoft/TypeScript-TmLanguage/blob/master/LICENSE.txt',
    url:
      'https://github.com/microsoft/vscode/blob/master/extensions/javascript/syntaxes/JavaScriptReact.tmLanguage.json',
    aliases: []
  },
  {
    id: 'javascript',
    scopeName: 'source.js',
    aliases: ['js'],
    repo: 'https://github.com/microsoft/TypeScript-TmLanguage',
    license: 'https://github.com/microsoft/TypeScript-TmLanguage/blob/master/LICENSE.txt',
    url:
      'https://github.com/microsoft/vscode/blob/master/extensions/javascript/syntaxes/JavaScript.tmLanguage.json'
  },
  {
    id: 'json',
    scopeName: 'source.json',
    aliases: [],
    path: path.resolve(__dirname, '../data/grammars/vscode-JSON.tmLanguage'),
    repo: 'https://github.com/microsoft/TypeScript-TmLanguage',
    license: 'https://github.com/microsoft/TypeScript-TmLanguage/blob/master/LICENSE.txt',
    url:
      'https://github.com/microsoft/vscode/blob/master/extensions/javascript/syntaxes/JavaScript.tmLanguage.json'
  },
  {
    id: 'jsonc',
    scopeName: 'source.json.comments',
    path: path.resolve(__dirname, '../data/grammars/JSONC.tmLanguage.json'),
    aliases: []
  },
  {
    id: 'less',
    scopeName: 'source.css.less',
    path: path.resolve(__dirname, '../data/grammars/less.tmLanguage.json'),
    aliases: []
  },
  {
    id: 'lua',
    scopeName: 'source.lua',
    path: path.resolve(__dirname, '../data/grammars/lua.json'),
    aliases: []
  },
  {
    id: 'makefile',
    scopeName: 'source.makefile',
    path: path.resolve(__dirname, '../data/grammars/Makefile.json'),
    aliases: []
  },
  {
    id: 'markdown',
    scopeName: 'text.html.markdown',
    path: path.resolve(__dirname, '../data/grammars/markdown.tmLanguage'),
    aliases: ['md']
  },
  {
    id: 'objective-c',
    scopeName: 'source.objc',
    path: path.resolve(__dirname, '../data/grammars/Objective-C.tmLanguage'),
    aliases: ['objc']
  },
  {
    id: 'perl',
    scopeName: 'source.perl',
    path: path.resolve(__dirname, '../data/grammars/Perl.plist'),
    aliases: []
  },
  {
    id: 'perl6',
    scopeName: 'source.perl.6',
    path: path.resolve(__dirname, '../data/grammars/Perl 6.tmLanguage'),
    aliases: []
  },
  {
    id: 'php',
    scopeName: 'text.html.php',
    path: path.resolve(__dirname, '../data/grammars/php.json'),
    aliases: []
  },
  {
    id: 'powershell',
    scopeName: 'source.powershell',
    path: path.resolve(__dirname, '../data/grammars/PowershellSyntax.tmLanguage'),
    aliases: ['ps', 'ps1']
  },
  {
    id: 'python',
    scopeName: 'source.python',
    path: path.resolve(__dirname, '../data/grammars/MagicPython.tmLanguage.json'),
    aliases: ['py']
  },
  {
    id: 'r',
    scopeName: 'source.r',
    path: path.resolve(__dirname, '../data/grammars/R.plist'),
    aliases: []
  },
  {
    id: 'razor',
    scopeName: 'text.html.cshtml',
    path: path.resolve(__dirname, '../data/grammars/cshtml.json'),
    aliases: []
  },
  {
    id: 'ruby',
    scopeName: 'source.ruby',
    path: path.resolve(__dirname, '../data/grammars/Ruby.plist'),
    aliases: ['rb']
  },
  {
    id: 'rust',
    scopeName: 'source.rust',
    path: path.resolve(__dirname, '../data/grammars/rust.json'),
    aliases: []
  },
  {
    id: 'scss',
    scopeName: 'source.css.scss',
    path: path.resolve(__dirname, '../data/grammars/scss.json'),
    aliases: []
  },
  {
    id: 'shaderlab',
    scopeName: 'source.shaderlab',
    path: path.resolve(__dirname, '../data/grammars/shaderlab.json'),
    aliases: ['shader']
  },
  {
    id: 'shellscript',
    scopeName: 'source.shell',
    path: path.resolve(__dirname, '../data/grammars/Shell-Unix-Bash.tmLanguage.json'),
    aliases: ['shell', 'bash', 'sh', 'zsh']
  },
  {
    id: 'sql',
    scopeName: 'source.sql',
    path: path.resolve(__dirname, '../data/grammars/SQL.plist'),
    aliases: []
  },
  {
    id: 'swift',
    scopeName: 'source.swift',
    path: path.resolve(__dirname, '../data/grammars/swift.json'),
    aliases: []
  },
  {
    id: 'typescript',
    scopeName: 'source.ts',
    path: path.resolve(__dirname, '../data/grammars/TypeScript.tmLanguage.json'),
    aliases: ['ts']
  },
  {
    id: 'tsx',
    scopeName: 'source.tsx',
    path: path.resolve(__dirname, '../data/grammars/TypeScriptReact.tmLanguage.json'),
    aliases: []
  },
  {
    id: 'vb',
    scopeName: 'source.asp.vb.net',
    path: path.resolve(__dirname, '../data/grammars/ASPVBnet.plist'),
    aliases: ['cmd']
  },
  {
    id: 'xml',
    scopeName: 'text.xml',
    path: path.resolve(__dirname, '../data/grammars/xml.json'),
    aliases: []
  },
  {
    id: 'xsl',
    scopeName: 'text.xml.xsl',
    path: path.resolve(__dirname, '../data/grammars/xsl.json'),
    aliases: []
  },
  {
    id: 'yaml',
    scopeName: 'source.yaml',
    path: path.resolve(__dirname, '../data/grammars/yaml.json'),
    aliases: ['yml']
  },
  /**
   * Extra grammars
   */
  {
    id: 'haml',
    scopeName: 'text.haml',
    path: path.resolve(__dirname, '../data/extraGrammars/haml.json'),
    aliases: []
  },
  {
    id: 'graphql',
    scopeName: 'source.graphql',
    path: path.resolve(__dirname, '../data/extraGrammars/graphql.json'),
    aliases: []
  },
  {
    id: 'sass',
    scopeName: 'source.sass',
    path: path.resolve(__dirname, '../data/extraGrammars/sass.tmLanguage'),
    aliases: []
  },
  {
    id: 'stylus',
    scopeName: 'source.stylus',
    path: path.resolve(__dirname, '../data/extraGrammars/stylus.json'),
    aliases: ['styl']
  },
  {
    id: 'postcss',
    scopeName: 'source.css.postcss',
    path: path.resolve(__dirname, '../data/extraGrammars/postcss.json'),
    aliases: []
  },
  {
    id: 'vue',
    scopeName: 'source.vue',
    path: path.resolve(__dirname, '../data/extraGrammars/vue.json'),
    aliases: []
  },
  {
    id: 'vue-html',
    scopeName: 'text.html.vue-html',
    path: path.resolve(__dirname, '../data/extraGrammars/vue-html.json'),
    aliases: []
  },
  {
    id: 'latex',
    scopeName: 'text.tex.latex',
    path: path.resolve(__dirname, '../data/extraGrammars/latex.plist'),
    aliases: ['tex']
  },
  {
    id: 'toml',
    scopeName: 'source.toml',
    path: path.resolve(__dirname, '../data/extraGrammars/TOML.tmLanguage'),
    aliases: []
  }
]

module.exports = {
  registry
}
