if($(window).width() > 1024)
{
    $('body').parallax({
        'elements': [
            {
                'selector': '.snow1',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.03,
                            'invert': false
                        }
                    }
                }
            },
            {
                'selector': '.snow2',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.06,
                            'invert': true
                        }
                    }
                }
            },
            {
                'selector': '.santa',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 30,
                            'multiplier': 0.002,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': 30,
                            'multiplier': 0.01,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
            }      
        ]
    });
} else {
   // change functionality for larger screens
}

