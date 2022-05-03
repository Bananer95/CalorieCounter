function eventLinks() {
  const links = document.getElementById('links');
  // const gender = document.querySelector('div.container_genders');
  console.log(links);

  links.addEventListener('click', (event) => {
    const getGendr = event.target.closest('h5.link_gender');

    if (getGendr) {
      console.log(5);
    }
  });
}

export default eventLinks;
