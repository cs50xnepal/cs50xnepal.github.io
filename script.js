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
      'assets/instructor/suraj-bhattarai',
    text:
      "As a community leader, it's always important for him to focus on engagement and contributions while also empowering members in reach.",
  },
  {
    name: 'Nabin Khair',
    position: 'Developer',
    photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD510X9fz2pybgGhdMXpUC-afnrCvZ1Ljpxa2u1p51v9Ya4bAlA64H2E4_qSQ6cNzOuwqx6DyMqIBUqOHvCwAzdHYLXUlcgs6WHg7eBVlKW6PAPHBQv7AJgRhvE4juscFsJ4hzThrq0YJXFYh-vKMfAkTFyGzpMiLLCUZKDy-1VGxs0cpPltrJbgpRNdI/s1600/profile-pic%20%281%29.png',
    text:
      'Nabin Khair, a web developer student hailing from Nepal. With a robust background in website design, building, and customization, I bring a wealth of experience to the digital realm. ',
  },
  {
    name: 'Himesh Reshimiya',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquid! Eaque id officia nostrum sequi praesentium fugit tempore doloremque nihil repudiandae.',
  },
  {
    name: 'Kamlesh',
    position: 'Project Manager',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquid! Eaque id officia nostrum sequi praesentium fugit tempore doloremque nihil repudiandae.",
  },
  {
    name: 'Bikku Baby',
    position: 'Lover Boy',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquid! Eaque id officia nostrum sequi praesentium fugit tempore doloremque nihil repudiandae",
  },
  {
    name: 'Rabin Khadka',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquid! Eaque id officia nostrum sequi praesentium fugit tempore doloremque nihil repudiandae",
  },
  {
    name: 'Prakash Bashyal',
    position: 'Agriculture Engineer',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquid! Eaque id officia nostrum sequi praesentium fugit tempore doloremque nihil repudiandae.',
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
