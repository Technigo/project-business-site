/*BUTTON*/

let width = window.innerWidth;
let height = window.innerHeight;
const body = document.body;

const elButton = document.querySelector(".star-button");
const elWrapper = document.querySelector(".star-wrapper");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const starmojis = ["⭐", "🌟"];
const stars = [];
const radius = 15;

const Cd = 0.47; // Dimensionless
const rho = 1.22; // kg / m^3
const A = Math.PI * radius * radius / 10000; // m^2
const ag = 9.81; // m / s^2
const frameRate = 1 / 60;

function createstar() /* create a star */ {
  const vx = getRandomArbitrary(-10, 10); // x velocity
  const vy = getRandomArbitrary(-10, 1);  // y velocity
  
  const el = document.createElement("div");
  el.className = "star";

  const inner = document.createElement("span");
  inner.className = "inner";
  inner.innerText = starmojis[getRandomInt(0, starmojis.length - 1)];
  el.appendChild(inner);
  
  elWrapper.appendChild(el);

  const rect = el.getBoundingClientRect();

  const lifetime = getRandomArbitrary(2000, 3000);

  el.style.setProperty("--lifetime", lifetime);

  const star = {
    el,
    absolutePosition: { x: rect.left, y: rect.top },
    position: { x: rect.left, y: rect.top },
    velocity: { x: vx, y: vy },
    mass: 0.1, //kg
    radius: el.offsetWidth, // 1px = 1cm
    restitution: -.7,
    
    lifetime,
    direction: vx > 0 ? 1 : -1,

    animating: true,

    remove() {
      this.animating = false;
      this.el.parentNode.removeChild(this.el);
    },

    animate() {
      const star = this;
      let Fx =
        -0.5 *
        Cd *
        A *
        rho *
        star.velocity.x *
        star.velocity.x *
        star.velocity.x /
        Math.abs(star.velocity.x);
      let Fy =
        -0.5 *
        Cd *
        A *
        rho *
        star.velocity.y *
        star.velocity.y *
        star.velocity.y /
        Math.abs(star.velocity.y);

      Fx = isNaN(Fx) ? 0 : Fx;
      Fy = isNaN(Fy) ? 0 : Fy;

      // Calculate acceleration ( F = ma )
      var ax = Fx / star.mass;
      var ay = ag + Fy / star.mass;
      // Integrate to get velocity
      star.velocity.x += ax * frameRate;
      star.velocity.y += ay * frameRate;

      // Integrate to get position
      star.position.x += star.velocity.x * frameRate * 100;
      star.position.y += star.velocity.y * frameRate * 100;
      
      star.checkBounds();
      star.update();
    },
    
    checkBounds() {

      if (star.position.y > height - star.radius) {
        star.velocity.y *= star.restitution;
        star.position.y = height - star.radius;
      }
      if (star.position.x > width - star.radius) {
        star.velocity.x *= star.restitution;
        star.position.x = width - star.radius;
        star.direction = -1;
      }
      if (star.position.x < star.radius) {
        star.velocity.x *= star.restitution;
        star.position.x = star.radius;
        star.direction = 1;
      }

    },

    update() {
      const relX = this.position.x - this.absolutePosition.x;
      const relY = this.position.y - this.absolutePosition.y;

      this.el.style.setProperty("--x", relX);
      this.el.style.setProperty("--y", relY);
      this.el.style.setProperty("--direction", this.direction);
    }
  };

  setTimeout(() => {
    star.remove();
  }, lifetime);

  return star;
}


function animationLoop() {
  var i = stars.length;
  while (i--) {
    stars[i].animate();

    if (!stars[i].animating) {
      stars.splice(i, 1);
    }
  }

  requestAnimationFrame(animationLoop);
}

animationLoop();

function addstars() {
  //cancelAnimationFrame(frame);
  if (stars.length > 40) {
    return;
  }
  for (let i = 0; i < 10; i++) {
    stars.push(createstar());
  }
}

elButton.addEventListener("click", addstars);
elButton.click();

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
});


/*ACCORDION*/

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");


accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");  
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"; 
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    
});

});
