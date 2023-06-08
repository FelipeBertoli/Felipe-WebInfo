window.onload = () => {
    const transition_el = document.querySelector('.trans');
  
    setTimeout(() => {
      transition_el.classList.remove('active');
    }, 10);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 100);
      })
    }
  }