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
    name: 'Suraj Bhattarai',
    position: 'President',
    photo:
      'assets/instructor/suraj-bhattarai.png',
    text:
      "As a community leader, it's always important for him to focus on engagement and contributions while also empowering members in reach.",
  },
  {
    name: 'Manoj Bhattarai',
    position: 'CSIT Student',
    photo: 'https://shorturl.at/cdpLR',
    text:
      "CS50x's innovative curriculum, coupled with renowned professors at Harvard, has enhanced the academic environment. It's not just about academic success; it's about nurturing well-rounded individuals ready for the dynamic field of computer science. And with the local adaptation'CS50x Nepal' it's no different,",
  },
  {
    name: 'Anupam Kandel',
    position: 'BEI Student at IOE Purwanchal Campus',
    photo: 'https://shorturl.at/ksBRZ',
    text:
      "The exposure to top-notch lectures from prestigious universities is a game-changer for students. It's a fantastic initiative that prepares them for real-world challenges.",
  },
  {
    name: 'Priya Thapa',
    position: 'BEI Student at IOE Purwanchal Campus',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Being an alumna of IOE Purwanchal Campus, I wish I had the opportunity to experience CS50x Nepal during my time. The exposure to top-notch lectures from prestigious universities is a game-changer for students.",
  },
  {
    name: 'Rajesh Adhikari',
    position: 'BCT Student IOE Purwanchal Campus',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    text:
      "As an educator, I am delighted to witness the positive impact of CS50x Nepal on our students. The curriculum aligns seamlessly with our academic goals, and the students' enthusiasm is palpable.",
  },
  {
    name: 'Rabin Khadka',
    position: 'Engineering Student',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "The native adaptation of lectures and activities made learning computer science enjoyable and relevant to our culture.",
  },
  {
    name: 'Pranisha Bashyal',
    position: 'Agriculture Engineer',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
    "The event format added a sense of community and excitement. I appreciate the commitment to education, and the use of the CC BY-NC-SA 4.0 license ensures that knowledge is shared freely.",
  },
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
