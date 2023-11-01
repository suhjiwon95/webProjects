# Responsive Navigation with Hamburger Icon Animation on Click
    Designed according to screen width 1440px for desktop and 320px for mobile.

## Steps
    1. Create .links and .hamburger-icon in a seperate <div>.
    2. Set `display: none` to .hamburger-icon on the desktop screen.
    3. Set `position: fixed` and `transition: 0.3s` to .links.
    4. On the screen with 320px, 
        - Set `display: block` to .hamburger-icon.
        - Set `right: -100%` and `height: 100%` to .links to hide it.
        - Set `right: 0;` to .links.active to show the links on click.
    5. On <script>,
        - Hook .hamberger-icon and .links on script
        - Add eventListener to .hamburger-icon on click and assign these actions:
            - add class `.active` to .hamburger-icon and .links on toggle
            `hamburgerIcon.classList.toggle('active');`
            `links.classList.toggle('active');`    

    6. All done!