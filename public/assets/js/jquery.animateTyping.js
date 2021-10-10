; ($ => {
    /*
     * @description     Animate typing text in an element
     * @param   {HTML Element} elementTyping - The element which the text be typed in it
     * @param   {string} text - The text that must be typed
     * @param   {number} speed(ms) - The speed of typing each character
     * @param   {number} delay(ms) - The delay before starting to type
     * @return  {Promise}
    */
    const typeText = (elementTyping, text, speed, delay) =>
        new Promise(resolve =>
            // Use setTimeout to controll the delay before starting
            setTimeout(() => {
                var charIndex = 0;
                var typing = setInterval(() => {
                    elementTyping.text(text.substr(0, ++charIndex));
                    if (charIndex == text.length) {
                        clearInterval(typing);
                        return resolve();
                    }
                }, speed);
            }, delay));

    /*
     * @description     Animate removing text from an element
     * @param   {HTML Element} elementTyping - The element which the text be removed from it
     * @param   {number} speed(ms) - The speed of removing each character
     * @param   {number} delay(ms) - The delay before starting to remove
     * @return  {Promise}
    */
    const removeText = (elementTyping, speed, delay) =>
        new Promise(resolve =>
            // Use setTimeout to controll the delay before starting
            setTimeout(function () {
                var text = elementTyping.text();
                var removing = setInterval(function () {
                    text = text.substr(0, text.length - 1);
                    elementTyping.text(text);
                    if (!text.length) {
                        clearInterval(removing);
                        return resolve();
                    }
                }, speed);
            }, delay));

    /*
     * @description     Show the cursor at the end of the text
     * @param   {HTML Element} elementTyping - The element to add an index to it
     * @param   {number} index - The index of each .animated-typing element
     * @param   {number} speed(ms) - The speed of blinking cursor
    */
    const showCursor = (elementTyping, index, speed) => {
        // Seperate each element by adding an index attribute to them to reach individual speed for each of them
        elementTyping.attr('data-animate-index', index);
        // The cursor be shown just by adding a CSS pseudo-element(::after) and animate that
        $('head').append(`
           <style>
               .animate-typing[data-animate-index="${index}"]::after {
                   content: '|';
                   animation: animateCursor ${speed}ms infinite alternate cubic-bezier(.68,-0.55,.27,1.55);
               }
           </style>
       `);
    }

    /*
     * @description     Show the cursor at the end of the text
     * @param   {number} speed(ms) - The speed of blinking cursor
    */
    $('.animate-typing').each(function (index) {
        const elementTyping = $(this);
        // The speed of typing each character
        const typeSpeed = +elementTyping.data('type-speed') || 200;
        // The delay before start to type
        const typeDelay = +elementTyping.data('type-delay') || 200;
        // The speed of removing each character
        const removeSpeed = +elementTyping.data('remove-speed') || 50;
        // The delay before start to remove
        const removeDelay = +elementTyping.data('remove-delay') || 500;
        // The speed of animate cursor
        const cursorSpeed = +elementTyping.data('cursor-speed') || 300;
        // If the loop equals to true, iterate through animation sub-texts will be infinity
        const loop = elementTyping.data('animate-loop') || false;
        // Convert the initialized text to sub-texts
        const textList = elementTyping.text().split('|');
        // Make the element clear from text
        elementTyping.text('');

        // Show the animated cursor at the end of text
        showCursor(elementTyping, index, cursorSpeed);

        // Iterate to sub-texts for animating
        // Use async/await because each iteration must wait for each animation to be done
        (async () => {
            var cycle = 0;
            // Use do/while because the iteration for all sub-texts must be run at least once
            do {
                // Iterate for each sub-text
                for (let subText of textList) {
                    if (cycle++)
                        await removeText(elementTyping, removeSpeed, removeDelay);
                    if(subText.trim())
                        await typeText(elementTyping, subText.trim(), typeSpeed, typeDelay)
                }
                // Set loop to true to iterate animate typing for sub-texts Infinity
            } while (loop);
        })();
    });

    /*
     * @description     Add keyframes animation for animating the cursor once to Head tag
    */
    (() =>
        $('head').append(`
            <style>
                @keyframes animateCursor {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
            </style>
        `)
    )();

})(jQuery);