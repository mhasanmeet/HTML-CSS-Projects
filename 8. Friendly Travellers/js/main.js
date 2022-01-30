//SideNav

const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});

//slider

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 400,
  interval: 3000
});

//Autocomplete - Search Section

const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Cox's Bazar" : null,
    "Bandarban" : null,
    "Sitakundu" : null,
    "Sylhet" : null,
    "Saint Martin" : null,
    "Sajek" : null,
    "Kolkata" : null,
    "Malaysia" : null
  }
});


// Photo Gallery - Material Boxed

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});


//Scroll Spy

const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy(ss, {});



