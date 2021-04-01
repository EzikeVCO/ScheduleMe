<template>
  <nav>
    <div class="img">
      <a href="https://calendly.com/">
        <img
          src="https://assets.calendly.com/assets/landing/logo-322b42cc2dbb65ee44833c643677cbcd7e8a35bc4c15ae429715d2dec882fc57.png"
          alt=" calendly.com image"
          srcset=""
        />
      </a>
    </div>
    <div class="menu-item">
      <a href="https://calendly.com/pages/features">Features</a>
    </div>
    <div class="menu-item">
      <a href="https://calendly.com/pages/pricing">Pricing</a>
    </div>
    <div class="menu-item">
      <a href="https://calendly.com/pages/integrations">Intergrations</a>
    </div>
    <Dropdown title="Services" :items="services" />
    <div class="menu-item">
      <a href="https://calendly.com/pages/teams">Teams</a>
    </div>
    <div class="menu-item">
      <a class="signup" href="https://calendly.com/app/signup">SignUp</a>
    </div>
    <div class="menu-item">
      <a href="https://calendly.com/app/login">Login</a>
    </div>
  </nav>
</template>

<script>
import Dropdown from "../Dropdown/Dropdown";
export default {
  name: "NavigationBar",
  components: { Dropdown },
  data() {
    return {
      services: [
        {
          title: "Sales + Marketing",
          link: "https://calendly.com/pages/solutions/sales-and-marketing",
        },
        {
          title: "Customer Success + Account Managment",
          link:
            "https://calendly.com/pages/solutions/customer-success-and-account-management",
        },
        {
          title: "Interview Scheduling",
          link: "https://calendly.com/pages/solutions/interview-scheduling",
        },
        {
          title: "Freelancers + Cosultants",
          link:
            "https://calendly.com/pages/solutions/freelancers-and-consultants",
        },
        {
          title: "Leaders + Entreprenuers",
          link:
            "https://calendly.com/pages/solutions/leaders-and-entrepreneurs ",
        },
      ],
    };
  },
};
</script>
<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: rgba(0, 0, 0, 0.89);
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  font-size: 100%;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
.signup {
  color: #fff;
  background-color: #3753f3;
  border-radius: 3px;
  margin: 0 14px;
  padding: 3px 14px;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: rgb(255, 255, 255);
  border-bottom-color: black;
}
</style>
