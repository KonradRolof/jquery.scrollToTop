jquery.scrollToTop
==================

<p>The scrollToTop script creates a link that leads to the top of the page once you've scrolled down far enough. Size of the plugin talks to 2 KB in the compressed version is narrow and does not require an extra CSS file or images. Who wish to customize scrollToTop can but then fall back on your own CSS code or a separate image. The scrollToTop script offers a number of options to suit your own needs.</p>

Usage
=======

<p>The scrollToTop plugin requires jQuery and must be included after library.</p>
<p>Extra HTML markup is not necessary since, scrollToTop generates all the necessary elements themselves. The plugin is only in the (document). Ready function to be called</p>
<pre><code>&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  ...
&lt;/head>
&lt;body>
  ...
  &lt;script src="jquery.min.js">&lt;/script>
  &lt;script src="plugins/jquery.scrolltotop.min.js">&lt;/script>
  &lt;script>
    $(document).ready(function(){
      $(document).scrollToTop();
    });
  &lt;/script>
&lt;/body>
&lt;/html>
</code></pre>

Options
=======

<table class="Table">
<thead>
<tr>
  <th scope="col">(Key)</th>
<th scope="col">Default value</th>
<th scope="col">Description</th>
</tr> 
</thead>
<tbody>
<tr>
  <td>triggerID</td>
<td>'#top'</td>
<td>The scrollToTop plugin creates an anchor element, which is accessed via a CSS ID. This ID can be changed at will, if the default ID # top was already taken. The CSS ID must be specified as a string and must be marked with # as the ID.</td>
</tr>
<tr>
  <td>startline</td>
<td>30</td>
<td>The startline option determines how far a visitor have to scroll down so that the top link is displayed.</td>
</tr>
<tr>
  <td>targetline</td>
<td>0</td>
<td>Default the page scrolls back to the top when the top link is clicked. The aim of the scroll function can be moved as needed down.</td>
</tr>
<tr>
  <td>fxSpeed</td>
<td>800</td>
<td>The fxSpeed defines the speed of scrolling to top. This is specified as a Number and jump to either time in milliseconds.</td>
</tr>
<tr>
  <td>useEasing</td>
<td>false</td>
<td>The scrolling behavior can be influenced with jQuery Easing. For this course, the Easing Plugin has to be integrated.</td>
</tr>
<tr>
  <td>fxEasing</td>
<td>'easeOutBounce'</td>
<td>If jQuery Easing is involved, one can determine with fxEasing the easing type.</td>
</tr>
<tr>
  <td>fadeTime</td>
<td>200</td>
<td>This option allows the input and blanking of the buttons to set.</td>
</tr>
<tr>
  <td>content</td>
<td>'&amp;#9650;' = &#9650;</td>
<td>Defines the content of the button in the font Arial.</td>
</tr>
<tr>
  <td>contentColor</td>
<td>'#c8ccd1'</td>
<td>Defines the color of the content.</td>
</tr>
<tr>
  <td>bgColor</td>
<td>'#454c54'</td>
<td>Defines the color of the background.</td>
</tr>
			<tr>
				<td>borderRadius</td>
				<td>'100%'</td>
				<td>Defines the border radius of the button.</td>
			</tr>
<tr>
  <td>customCss</td>
<td>false</td>
<td>Want to change the look of the top button with own CSS, you can disable with this option to the default CSS values.</td>
</tr>
<tr>
  <td>customPosX</td>
<td>'20px'</td>
<td>This option specifies the alignment of the top links on the horizontal axis (X-axis), starting from the right edge of the browser.</td>
</tr>
<tr>
  <td>customPosY</td>
<td>'20px'</td>
<td>This option specifies the alignment of the top links on the verticl axis (Y-axis), starting from the bottom edge of the browser.</td>
</tr>
<tr>
  <td>useImage</td>
<td>false</td>
<td>This option generates an image tag inside of the top link.</td>
</tr>
<tr>
  <td>imagePath</td>
<td>'images/top.png'</td>
<td>The path to the image must be specified starting from the root.</td>
</tr>
<tr>
  <td>imageWidth</td>
<td>40</td>
<td>Defines the image width.</td>
</tr>
</tbody>
</table>
      
Licence
=======
<p>Das scrollToTop Script steht unter <a href="http://opensource.org/licenses/MIT" title="Opensource.org" target="_blank">MIT Lizenz</a> und unter <a href="http://www.gnu.org/licenses/gpl.txt" target="_blank" title="GNU GENERAL PUBLIC LICENSE Version 3">GNU Lizenz</a>.</p>
<p>Copyright &#169; 2013 Konrad Rolof</p>

