import{d as n}from"./app.cd4bbdf2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="transform-2d" tabindex="-1"><a class="header-anchor" href="#transform-2d" aria-hidden="true">#</a> transform 2D</h2><h4 id="\u65CB\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u65CB\u8F6C" aria-hidden="true">#</a> \u65CB\u8F6C</h4><ul><li>\u5355\u4F4D\uFF1A\u5EA6\u6570\u5355\u4F4D\uFF0C\u5E38\u7528\u89D2\u5EA6(deg)</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="\u659C\u5207" tabindex="-1"><a class="header-anchor" href="#\u659C\u5207" aria-hidden="true">#</a> \u659C\u5207</h4><ul><li>\u5355\u4F4D\uFF1A\u5EA6\u6570\u5355\u4F4D\uFF0C\u5E38\u7528\u89D2\u5EA6(deg)</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>20deg<span class="token punctuation">,</span> 40deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewY</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u7F29\u653E" tabindex="-1"><a class="header-anchor" href="#\u7F29\u653E" aria-hidden="true">#</a> \u7F29\u653E</h4><ul><li>\u5355\u4F4D\uFF1A\u500D\u6570\uFF0C\u65E0\u9700\u6307\u5B9A\u5355\u4F4D</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u4F4D\u79FB" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u79FB" aria-hidden="true">#</a> \u4F4D\u79FB</h4><ul><li>\u5355\u4F4D\uFF1A\u957F\u5EA6\u5355\u4F4D\uFF0C\u5E38\u7528(px)</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="transform-origin" tabindex="-1"><a class="header-anchor" href="#transform-origin" aria-hidden="true">#</a> transform-origin</h4><ul><li>\u63CF\u8FF0\uFF1A\u8BBE\u7F6E\u53D8\u6362\u57FA\u70B9</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transform-origin</span><span class="token punctuation">:</span> \u5173\u952E\u5B57/\u767E\u5206\u6BD4/\u8DDD\u79BB\u5355\u4F4D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p class="tip">\u5751\u70B9\uFF1A\u901A\u8FC7js\u7684\u65B9\u5F0F\u6765\u8BBE\u7F6E\u53D8\u6362\u57FA\u70B9\uFF08dom.style.WebkitTransformOrigin = &#39;0 0&#39;;\uFF09\uFF0C\u4E0D\u80FD\u5FEB\u901F\u540C\u6B65\u7ED9\u53D8\u6362\uFF0C\u5728css\u4E2D\u6CA1\u95EE\u9898</p><h4 id="\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u6267\u884C\u987A\u5E8F</h4><p>\u5148\u5199\u540E\u6267\u884C\uFF0C\u5E94\u8BE5\u8BF4 \u5148\u5199\u7684\u53D8\u6362 \u4F1A\u5F71\u54CD \u540E\u8FB9\u7684\u53D8\u6362</p><h4 id="\u77E9\u9635-matrix-a-b-c-d-e-f" tabindex="-1"><a class="header-anchor" href="#\u77E9\u9635-matrix-a-b-c-d-e-f" aria-hidden="true">#</a> \u77E9\u9635 matrix(a, b, c, d, e, f)</h4><ul><li><p>\u9ED8\u8BA4\u503C\uFF1Amatrix(1, 0, 0, 1, 0, 0)</p><p>rotate / skew / scale / translate \u7B49\u53D8\u6362\u90FD\u662F\u901A\u8FC7\u77E9\u9635\u5B9E\u73B0\u7684\uFF0C\u53EA\u4E0D\u8FC7\u662F\u6D4F\u89C8\u5668\u7ED9\u6211\u4EEC\u5C01\u88C5\u597D\u7684\u51FD\u6570</p></li><li><p>\u8BA1\u7B97\u65B9\u6CD5</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>x \u8F74\u4F4D\u79FB\uFF1A
    e = e + x
y \u8F74\u4F4D\u79FB\uFF1A
    f = f + y

x \u8F74\u659C\u5207\uFF1A
    c = Math.tan(Math.PI / 180 * x)
y \u8F74\u659C\u5207\uFF1A
    b = Math.tan(Math.PI / 180 * y)

x \u8F74\u7F29\u653E\uFF1A
    a = a * x
    c = c * x
    e = e * x
y \u8F74\u7F29\u653E\uFF1A
    b = b * y
    c = c * y
    f = f * y
\u65CB\u8F6C
    a = Math.cos(Math.PI / 180 * deg)
    b = Math.sin(Math.PI / 180 * deg)
    c = -Math.sin(Math.PI / 180 * deg)
    d = Math.cos(Math.PI / 180 * deg)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="transform-3d" tabindex="-1"><a class="header-anchor" href="#transform-3d" aria-hidden="true">#</a> transform 3D</h2><h4 id="perspective" tabindex="-1"><a class="header-anchor" href="#perspective" aria-hidden="true">#</a> perspective</h4><ul><li>\u63CF\u8FF0\uFF1A\u8BBE\u7F6E\u666F\u6DF1</li><li>\u5355\u4F4D\uFF1A\u65E0</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">perspective</span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u6CE8\u610F\uFF1A\u8BE5\u5C5E\u6027\u8981\u52A0\u7ED9\u9700\u8981\u505A3D\u53D8\u6362\u7684\u7236\u7EA7\u5143\u7D20</li></ul><h4 id="perspective-origin" tabindex="-1"><a class="header-anchor" href="#perspective-origin" aria-hidden="true">#</a> perspective-origin</h4><ul><li>\u63CF\u8FF0\uFF1A\u666F\u6DF1\u57FA\u70B9\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u89C6\u7EBF\u65B9\u5411</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">perspective-origin</span><span class="token punctuation">:</span> \u5173\u952E\u5B57/\u8DDD\u79BB\u5355\u4F4D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="transform-style" tabindex="-1"><a class="header-anchor" href="#transform-style" aria-hidden="true">#</a> transform-style</h4><ul><li>\u63CF\u8FF0\uFF1A\u5F53\u5143\u7D20\u505A3D\u53D8\u6362\u65F6\u662F\u5426\u4FDD\u7559\u5B50\u5143\u7D20\u76843D\u53D8\u6362</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">transform-style</span><span class="token punctuation">:</span> flat<span class="token punctuation">;</span> <span class="token comment">/* \u4E0D\u4FDD\u7559 */</span>
<span class="token property">transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span> <span class="token comment">/* \u4FDD\u7559 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="backface-visibility" tabindex="-1"><a class="header-anchor" href="#backface-visibility" aria-hidden="true">#</a> backface-visibility</h4><ul><li>\u63CF\u8FF0\uFF1A\u9690\u85CF\u80CC\u9762</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">backface-visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> <span class="token comment">/* \u53EF\u89C1 */</span>
<span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/* \u4E0D\u53EF\u89C1 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_3d-\u65CB\u8F6C" tabindex="-1"><a class="header-anchor" href="#_3d-\u65CB\u8F6C" aria-hidden="true">#</a> 3D \u65CB\u8F6C</h4><ul><li>\u5355\u4F4D\uFF1A\u5EA6\u6570\u5355\u4F4D\uFF0C\u5E38\u7528\u89D2\u5EA6(deg)</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u56F4\u7ED5Z\u8F74\u65CB\u8F6C */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* XYZ\u7ED3\u5408\u5199\u6CD5 */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_3d-\u4F4D\u79FB" tabindex="-1"><a class="header-anchor" href="#_3d-\u4F4D\u79FB" aria-hidden="true">#</a> 3D \u4F4D\u79FB</h4><ul><li>\u5355\u4F4D\uFF1A\u957F\u5EA6\u5355\u4F4D\uFF0C\u5E38\u7528\u5355\u4F4D(px)</li><li>\u793A\u4F8B\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Z\u8F74\u4F4D\u79FB */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* XYZ\u7ED3\u5408\u5199\u6CD5 */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,42);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
