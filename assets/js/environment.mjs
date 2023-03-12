// Datos estaticos
export const environment = 
{
    contact: 
    {
        email: "mailto:arpaxavier@gmail.com",
        twitter: "https://twitter.com/_kingdox_",
        github: "https://github.com/kingdox",
        itchio: "https://kingdox.itch.io/",
        develteam: "https://www.develteam.com/Developer/Kingdox",
    },
    dom:
    {
        keys:
        {
            onLoaded: "DOMContentLoaded"
        }
    },
    localStorage:
    {
        keys:
        {
            pagemode: "pageModeCount"
        }
    },
    css:
    {
        var:
        {
            color:
            {
                light: "--color-light",
                gray_light: "--color-gray-light",
                gray_medium_light: "--color-gray-medium-light",
                gray_medium: "--color-gray-medium",
                gray: "--color-gray",
                gray_dark: "--color-gray-dark",
                gray_very_dark: "--color-gray-very-dark",
                black: "--color-black",
                red: "--color-red",
                green: "--color-green",
                blue: "--color-blue",
                yellow: "--color-yellow",
            },
            primary: "--primary",
            secondary: "--secondary",
            tertiary: "--tertiary",
        },
    }
};


// Estructuras que son armadas de literales...
export const configs =
{
    pallette:
    {
        list:
        [
            [
                [environment.css.var.primary, environment.css.var.color.light],
                [environment.css.var.secondary, environment.css.var.color.black],
                [environment.css.var.tertiary, environment.css.var.color.gray],
            ],
            [
                [environment.css.var.primary, environment.css.var.color.black],
                [environment.css.var.secondary, environment.css.var.color.light],
                [environment.css.var.tertiary, environment.css.var.color.gray],
            ],
        ],
    },
}



// const _data = new URLSearchParams(window.location.search).get(K_DATA);
// console.log(_data);


// Funciones
export const utils =
{
    toInt: (_value, _def_val) => 
    {
        let int = Number(_value);
        if (int == null || isNaN(int)) return _def_val;
        else return int;
    },
    css_set: (_variable, _value) => 
    {
        document.documentElement.style.setProperty(_variable, `var(${_value})`);
    },

    localStorage_get: (_key, _defaultValue)  =>
    {
        if(localStorage.getItem(_key) == null)  localStorage.setItem(_key, _defaultValue);
        return localStorage.getItem(_key);
    },

    localStorage_set: (_key, _value) =>
    {
        localStorage.setItem(_value)
    },
    
    pallette_change: (changeCounts) => 
    {
        let _pallette = configs.pallette.list[changeCounts % configs.pallette.list.length];
        console.log("[pallette_change]", {_pallette, changeCounts});
        for (let i = 0; i < _pallette.length; i++) 
        {
            utils.css_set(_pallette[0],_pallette[1]);
        }
    },
}