/* FAQs  Starts*/

var faq = document.getElementsByClassName("faq-box-question");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var body = this.nextElementSibling;
        if (body.style.maxHeight === "100px") {
            body.style.maxHeight = "0px";
        } else {
            body.style.maxHeight = "100px";
        }
    });
}

/* FAQs  Ends*/ 





/*Testimonial Starts*/
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Manoj Bhattarai',
    position: 'Management Student, Mahendra Shanti Secondary School',
    photo: 'https://shorturl.at/cdpLR',
    text:
      "I am a Management with Computer Science(optional) student. For me, CS50x been an enriching experience, providing me with a wealth of knowledge. CS50x is an exceptional course that offers high-quality content for free, providing tremendous value to students worldwide. I am excited hearing CS50x Nepal.",
  },
  {
    name: 'Anupam Kandel',
    position: 'BEI Student, IOE Purwanchal Campus',
    photo: 'https://shorturl.at/ksBRZ',
    text:
      "The exposure to top-notch lectures from Prof. David J. Malan is a game-changer for students. I am lucky to find it in my very first year at university.",
  },
  {
    name: 'Gaurav Bohara',
    position: 'BCA, NAST',
    photo: 'https://shorturl.at/aEN15',
    text:
      "Going through the lectures before my project helped me with various other projects as well. I can say that I am confident with my skills, all thanks to CS50x lectures.",
  },
  {
    name: 'Bibek Bist',
    position: 'Computer Engineering, New Summit College',
    photo: 'https://shorturl.at/dyGX7',
    text:
      "I am delighted to hear on the positive impact of CS50x Nepal on students in Nepal. The curriculum is smooth for begineers. I absolutely loved it.",
  },
    
  /*{
    name: '#',
    position: '#',
    photo:
      '#',
    text:
    "#",
  },
  
  {
    name: '#',
    position: '#',
    photo:
      '#',
    text:
    "#",
  }, */
    
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
/*Testimonial Ends*/


/*Button Starts*/

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  

  /*Button Ends*/



  var marquee = document.getElementById('myMarquee');

  // Set a higher initial scroll amount
  marquee.setAttribute('scrollamount', '20');

  // Decrease the scroll amount after 5 seconds
  setTimeout(function() {
    marquee.setAttribute('scrollamount', '5');
  }, 5000); // 5000 milliseconds = 5 seconds



  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


/*Always on top*/
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
