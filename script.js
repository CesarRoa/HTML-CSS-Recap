let openTab = (id) => {
    //calling variables
    let allTabs, target;
    //calling all divs with class = tab
    allTabs = document.querySelectorAll('.tab');
    //looping each time to remove active class
    allTabs.forEach(tab =>{
        tab.classList.remove('active');
    });
    //setting the target as the called div when pressing button, change class name
    target = document.getElementById(id);
    target.classList.add('active');
}