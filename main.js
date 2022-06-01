const context = {
  title: 'Welcome to Musicon',
  body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
  instruments: [
    {
      image: './images/electronic_keyboard.png',
      name: 'Electronic Keyboard',
      description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
      price: '$1,999.00',
      sale: '$1,699.89'
    },
    {
      image: './images/electronic_guitar.png',
      name: 'Electric Guitar',
      description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
      price: '$599.99'
    },
    {
      image: './images/bass_guitar.png',
      name: 'Bass Guitar',
      description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
      price: '$624.99'
    },
    {
      image: './images/drum_kit.png',
      name: 'Drum Kit',
      description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: '$649.00',
      sale: '$349.00'
    },
    {
      image: './images/violin.png',
      name: 'Violin',
      description: 'A versatile instrument that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
      price: '$245.00'
    }
  ]
};

// declare a variable named templateElement using the const keyword.

const templateElement = document.getElementById('templateHB');

// innerHTML of templateElement and assign it to a new variable named templateSource. 
const templateSource = templateElement.innerHTML;

// Pass the templateSource into the Handlebars.compile() method as an argument. 
// Assign a compiled template returned above to a new variable named template. 

const template =  Handlebars.compile(templateSource);


// Pass the provided context object into the template function as an argument.
// Assign the return value of the step above to a new variable named compiledHtml

const compiledHtml = template(context); // we are passing the above context object

// Use the document.getElementById() method to get an element with an id of information on the document. 

 document.getElementById('information').innerHTML = compiledHtml;

