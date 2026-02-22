function showskill(skill) {
    const box = document.getElementById("skill-details")
    let content = "";

    if (skill === "java") {
        content = `<h3 style="text-align: center;">Java Skill</h3>
                    <ol type='1'>
                        <li><B>Core Java (OOP)</B>
                        
                          <ul>
                              <li>
                                 <p>I have covered OOP concept in java including Encapsulation using getter and setter methods , Inheritance using the extends keyword , Polymorphism , through method overoading and overriding and Abstraction using classes and interfaces.</p>
                              </li>
                           </ul>
                        
                         </li>
                        <li><B>Collection Framework</B>
                         
                          <ul>
                              <li>
                                 <p>I have worked with the Java Collections Framework includeing List , Set , and Map interfaces such as ArrayList,HashSet,and HashMap for storing and managing the data efficiently.</p>
                              </li>
                           </ul>
                       
                        </li>
                        <li><B>Multithreading </B>
                          <ul>
                              <li>
                                 <p>I have Knowledge of multithreading using Thread class and Runnable interface , along with basic syncronization concepts.</p>
                              </li>
                           </ul>
                        
                        </li>
                        <li><B>JDBC</B>
                            
                          <ul>
                              <li>
                                 <p>I have used JDBC to establish databse connections , execute SQL queries, and perform CRUD operation using PreparedStatement.</p>
                              </li>
                           </ul>
                         
                        </li>
                        <li><B>JSP </B>
                             
                          <ul>
                              <li>
                                 <p>I have worked with JSP to buid dynamic web applications. I have used JSP directives , scriplets,implicit objects, and handled from data. I have also integrated JSP with Servlet following the MVC architecture pattern.</p>
                              </li>
                           </ul>
                        
                        </li>
                    </ol>`;
    } else
    if (skill === "spring") {

        content = `<h3 style="text-align: center;">SpringBoot Skill</h3>
                   <ol type='1' >
                        <li><b>Rest API Development</b>
                           <ul>
                           <li><p>I have developed RESTful APIs using Spring Boot annotations like <b> @RestController,@GetMapping,@PostMapping,@DeleteMapping,@PutMapping</b>.</p></li>
                           </ul>
                        </li>
                        <li><b>CRUD Operations</b>
                           <ul>
                           <li><p>I have implemented Create,Read,Update,and Delete operations for managing database records through REST APIs.</p></li>
                           </ul>
                        </li>
                        <li><b>Hibernate</b>
                           <ul>
                           <li><p>I have worked with Hibernate ORM for mapping Java classes to databases tables using annotations like <b> @Entity,@Id,and @GeneratedValue</b>.</p></li>
                           </ul>
                        </li>
                           <li><b>Spring Data JPA</b>
                           <ul>
                           <li><p>I have used Spring Data JPA and JpaRepository to simplify databse interactions and write custom query method.</p></li>
                           </ul>
                        </li>
                    </ol>
        `;

    } else if (skill === "html") {
        content = `<h3 style="text-align: center;">HTML Skill</h3>
                   <ol type='1'>
                        <li>Basic Structure
                           <ul>
                              <li>
                                <p>I have strong knowledge of HTML structure including proper use of doctype, head and body sections.</p>
                              </li>
                           </ul>
                        </li>
                        <li>Semantic Tags
                           <ul>
                              <li>
                                <p>I have used semantic tags such as <b>header, section, article, nav, and footer</b> to create well-structured and SEO-friendly web pages.</p>
                              </li>
                           </ul>
                        </li>
                        <li>Tables
                           <ul>
                              <li>
                                <p>I have created structured tables using <b>table, thead, tbody, tr, th, and td</b> elements.</p>
                              </li>
                           </ul>
                        </li>
                        <li>Forms & Input Handling
                           <ul>
                              <li>
                                <p>I have designed forms using various input types like text, email, password, radio, checkbox, and implemented basic validation.</p>
                              </li>
                           </ul>
                        </li>
                    </ol>
        `;

    } else if (skill === "css") {
        content = `<h3 style="text-align: center;">CSS Skill</h3>
         
              <ul>
                <li>
                  understanding of CSS syntax and Selectors(class, id, element)
                </li>
                <li>
                Styling Elements (colors,fonts,background,boders)
                </li>
                <li>
                Box Model(margin, padding, border, width, height)
                </li>
                <li>
                Flexbox for Layout Design
                </li>
                <li>
                Basic Resposive Design using Media Queries
                </li>
                <li>
                Creating Clean and Structured UI Layouts
                </li>
              </ul>
         
        `;

    } else if (skill === "js") {
        content = `<h3 style="text-align: center;">JavaScript Skill</h3>
          <ol type='1'>
          <li><B>DOM Manipulation</B>
              <ul>
                <li>
                    <p>I have manipulated DOM elements dynamically using method like <b>getElementById, querySelector, innerHTML, and innerText. </P>
                </li>
              </ul>
          </li>
          <li><b>Event Handling</b>
              <ul>
                <li>
                    <p>I have handle user interactions using events like Click, Submit, and Delete. </P>
                </li>
              </ul>
         
          </ol>
            
        `;
    }

    box.innerHTML = content;
    box.style.display = "block";
}