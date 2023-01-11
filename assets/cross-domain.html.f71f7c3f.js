import{d as n}from"./app.cd4bbdf2.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a> \u8DE8\u57DF</h2><h4 id="\u540C\u6E90\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u540C\u6E90\u7B56\u7565" aria-hidden="true">#</a> \u540C\u6E90\u7B56\u7565</h4><h6 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h6><p>\u540C\u6E90\u7B56\u7565\u6307\u4E09\u4E2A\u76F8\u540C\uFF1A\u534F\u8BAE\u76F8\u540C\u3001\u57DF\u540D\u76F8\u540C\u3001\u7AEF\u53E3\u76F8\u540C\uFF0C\u6709\u4E00\u4E2A\u4E0D\u540C\u5373\u975E\u540C\u6E90\u3002</p><p class="tip">\u4E3B\u57DF\u4E0E\u5B50\u57DF\u3001\u57DF\u540D\u4E0E\u57DF\u540D\u5BF9\u5E94\u7684IP\u3002\u90FD\u662F\u975E\u540C\u6E90\u7684</p><h6 id="\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#\u610F\u4E49" aria-hidden="true">#</a> \u610F\u4E49</h6><p>\u540C\u6E90\u7B56\u7565\u53EF\u4EE5\u7B97\u662Fweb\u5B89\u5168\u7684\u57FA\u77F3\uFF0C\u6CA1\u6709\u540C\u6E90\u7B56\u7565\u5C31\u4E48\u6709\u5B89\u5168\u53EF\u8A00\u3002</p><h6 id="\u975E\u540C\u6E90\u7684\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u975E\u540C\u6E90\u7684\u9650\u5236" aria-hidden="true">#</a> \u975E\u540C\u6E90\u7684\u9650\u5236</h6><ul><li>\u65E0\u6CD5\u5171\u4EAB cookie/Storage/indexDB</li><li>\u65E0\u6CD5\u64CD\u4F5C\u5F7C\u6B64\u7684 DOM</li><li>\u65E0\u6CD5\u53D1\u9001 ajax \u8BF7\u6C42</li><li>\u65E0\u6CD5\u901A\u8FC7 flash \u53D1\u9001 http \u8BF7\u6C42</li></ul><h4 id="\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5</h4><h6 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h6><ul><li><p>\u539F\u7406\uFF1AJSONP \u7684\u539F\u7406\u662F\u5229\u7528 <code>&lt;script&gt;</code> \u6807\u7B7E\u7684 <code>src</code> \u5C5E\u6027\u52A0\u8F7D\u8D44\u6E90\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u5F71\u54CD\uFF0C\u5176\u672C\u8D28\u662F\u5411\u670D\u52A1\u7AEF\u8BF7\u6C42\u4E00\u6BB5 <code>js</code> \u4EE3\u7801\u3002</p></li><li><p>\u5B9E\u73B0\uFF1A</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> scriptTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5176\u4E2Dcb\u662F\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u7684\u540D\u5B57\uFF0Ccbname\u662F\u56DE\u8C03\u51FD\u6570\u7684\u540D\u5B57\uFF0C\u8FD9\u4E24\u4E2A\u540D\u5B57\u8981\u4E0E\u670D\u52A1\u7AEF\u6C9F\u901A\u5B9A\u4E49</span>
scriptTag<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://hcysun.me/xxx?cb=cbname&#39;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptTag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>\u4F18\u70B9</p><ul><li>1\u3001\u53EF\u8DE8\u57DF</li><li>2\u3001\u517C\u5BB9\u6027\u597D\uFF0C\u57FA\u672C\u5168\u90E8\u517C\u5BB9</li></ul></li><li><p>\u7F3A\u70B9</p><ul><li>\u53EA\u652F\u6301 <code>GET</code> \u8BF7\u6C42</li><li>\u786E\u5B9AJSONP\u8BF7\u6C42\u662F\u5426\u5931\u8D25\u5E76\u4E0D\u5BB9\u6613\uFF0C\u4E00\u822C\u6839\u636E\u8D85\u65F6\u65F6\u95F4\u6765\u5224\u65AD</li></ul></li></ul><h6 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h6><p>\u5168\u79F0\u662F\uFF1ACross-Origin Resource Sharing\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09</p><ul><li><p>\u539F\u7406\uFF1A</p><ul><li>1\u3001\u5F53\u6D4F\u89C8\u5668\u53D1\u73B0\u6211\u4EEC\u7684XHR\u8BF7\u6C42\u4E0D\u7B26\u5408\u540C\u6E90\u7B56\u7565\u65F6\uFF0C\u4F1A\u5728\u8BF7\u6C42\u5934\u6DFB\u52A0 <code>Origin</code> \u5B57\u6BB5\uFF0C\u4EE3\u8868\u8BF7\u6C42\u7684\u6765\u6E90</li><li>2\u3001\u670D\u52A1\u7AEF\u9700\u8981\u5904\u7406\u8BF7\u6C42\u5934\u90E8\u7684 <code>Origin</code> \u5B57\u6BB5\uFF0C\u6839\u636E\u60C5\u51B5\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 <ul><li><code>Access-Control-Allow-Origin</code></li><li><code>Access-Control-Allow-Methods</code></li><li><code>Access-Control-Allow-Headers</code> \u7B49\u5934\u90E8\u4FE1\u606F</li></ul></li></ul></li><li><p>\u7F3A\u70B9</p><ul><li>\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u4ED6\u662F\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684\u4E00\u79CD\u8DE8\u57DF\u8D44\u6E90\u8BF7\u6C42\u7684\u4E00\u79CD\u65B9\u5F0F</li></ul></li></ul><h4 id="iframe\u4E2D\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#iframe\u4E2D\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5" aria-hidden="true">#</a> iframe\u4E2D\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5</h4><h6 id="\u8DE8\u6587\u6863\u901A\u4FE1api-postmessage" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u6587\u6863\u901A\u4FE1api-postmessage" aria-hidden="true">#</a> \u8DE8\u6587\u6863\u901A\u4FE1API\uFF08postMessage\uFF09</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Page Foo</span>
iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Hello from foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/path/to/bar&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Page Bar</span>
window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>source<span class="token punctuation">)</span>    <span class="token comment">// \u53D1\u9001\u6D88\u606F\u7684\u7A97\u53E3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>  <span class="token comment">// \u6D88\u606F\u53D1\u5411\u7684\u7F51\u5740</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>    <span class="token comment">// \u6D88\u606F\u5185\u5BB9</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h6 id="\u7247\u6BB5\u6807\u8BC6\u7B26-hash\u503C" tabindex="-1"><a class="header-anchor" href="#\u7247\u6BB5\u6807\u8BC6\u7B26-hash\u503C" aria-hidden="true">#</a> \u7247\u6BB5\u6807\u8BC6\u7B26\uFF08hash\u503C\uFF09</h6><p>\u7236\u7EA7\u9875\u9762\u867D\u7136\u4E0D\u80FD\u64CD\u4F5C <code>iframe</code> \u7684 <code>window</code> \u548C DOM\uFF0C\u4F46\u662F\u53EF\u4EE5\u4FEE\u6539 <code>iframe</code> \u7684 <code>URL</code>\uFF0C\u901A\u8FC7\u4FEE\u6539 <code>hash</code> \u503C\uFF08\u5373\uFF1A<code>location.hash</code>\uFF09\uFF0C\u76D1\u542C <code>hashchange</code> \u4E8B\u4EF6\u8FDB\u884C\u8DE8\u6587\u6863\u901A\u4FE1</p><h6 id="window-name" tabindex="-1"><a class="header-anchor" href="#window-name" aria-hidden="true">#</a> window.name</h6>`,23);function c(p,o){return e}var l=a(s,[["render",c]]);export{l as default};
