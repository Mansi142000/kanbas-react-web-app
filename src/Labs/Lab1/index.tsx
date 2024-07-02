export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
      <div id="wd-p-tag">
  <h4>Paragraph Tag</h4>
    <p id="wd-p-1">
This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
  </p>
  <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
        </p>
        <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
        </p>

</div>
<div id="wd-lists">
      
      <h5>Ordered List Tag</h5>
  How to make pancakes:
  <ol id="wd-pancakes">
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients.</li>
    <li>Stir to combine.</li>
    <li>Heat a skillet or griddle.</li>
    <li>Pour batter onto the skillet.</li>
    <li>Cook until bubbly on top.</li>
    <li>Flip and cook the other side.</li>
    <li>Serve and enjoy!</li>
  </ol>
  My favorite recipe:
  <ol id="wd-your-favorite-recipe">
  <li>Mix dry ingredients (1 cup all purpose flour, 1/3 cup sugar).</li>
    <li>Add wet ingredients.(1 large egg, 1/2 cup milk, 1/4 cup melter butter)</li>
    <li>Stir to combine.</li>
    <li>Heat a skillet or griddle.</li>
    <li>Pour batter onto the skillet (Add some chocolate chips).</li>
    <li>Cook until bubbly on top.</li>
    <li>Flip and cook the other side.</li>
    <li>Pour hot melted chocolate on top and enjoy!</li>
  </ol>
</div>
<h5>Unordered List Tag</h5>
My favorite books (in no particular order)
<ul id="wd-my-books">
  <li>Dune</li>
  <li>Lord of the Rings</li>
  <li>Ender's Game</li>
  <li>Red Mars</li>
  <li>The Forever War</li>
</ul>
Your favorite books (in no particular order)
<ul id="wd-your-books">
<li>The lauging policeman</li>
  <li>The pelican brief</li>
  <li>Harry Potter</li>
  <li>Private LA</li>
  <li>Goosebumps</li>
</ul>
<div id="wd-tables">
        <h4>Table Tag</h4>
        <p>
          Content in a table cell can be aligned at the top of the cell using the <code>valign</code> attribute set to "top", e.g., <code>&lt;td valign="top"&gt;</code>. Content can also be aligned horizontally in a table cell with the <code>align</code> attribute, e.g., <code>&lt;td align="right"&gt;</code> aligns the content to the right.
        </p>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td valign="top" align="right">Q1</td>
              <td valign="top" align="right">HTML</td>
              <td valign="top" align="right">2/3/21</td>
              <td valign="top" align="right">85</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q2</td>
              <td valign="top" align="right">CSS</td>
              <td valign="top" align="right">2/10/21</td>
              <td valign="top" align="right">90</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q3</td>
              <td valign="top" align="right">JavaScript</td>
              <td valign="top" align="right">2/17/21</td>
              <td valign="top" align="right">95</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q4</td>
              <td valign="top" align="right">React</td>
              <td valign="top" align="right">2/24/21</td>
              <td valign="top" align="right">95</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q5</td>
              <td valign="top" align="right">Routing</td>
              <td valign="top" align="right">3/3/21</td>
              <td valign="top" align="right">93</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q6</td>
              <td valign="top" align="right">JavaScript</td>
              <td valign="top" align="right">3/10/21</td>
              <td valign="top" align="right">89</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q7</td>
              <td valign="top" align="right">Redux</td>
              <td valign="top" align="right">3/17/21</td>
              <td valign="top" align="right">91</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q8</td>
              <td valign="top" align="right">Node</td>
              <td valign="top" align="right">3/24/21</td>
              <td valign="top" align="right">90</td>
            </tr>
            <tr>
            <td valign="top" align="right">Q9</td>
              <td valign="top" align="right">MongoDB</td>
              <td valign="top" align="right">3/31/21</td>
              <td valign="top" align="right">87</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q10</td>
              <td valign="top" align="right">APIs</td>
              <td valign="top" align="right">4/7/21</td>
              <td valign="top" align="right">94</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet:
  <br />
  <img id="wd-starship"
    width="400px"
   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
  />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="./images/teslabot.jpeg" height="200px" />
</div>
<div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
      value="Wonderland" title="The last name" />
    {/* copy rest of form elements here  */}
  </form>
</div>

    </div>
  );
}