// const heading= React.createElement("h1",{id:"heading", abc:"hello"},"hello welcome to the REACT");//this is arecat element which is a javscript object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{/* <div id = "parent">
    <div id="child">
        <h1>hello world</h1>
        <h1>hello world</h1>

    </div>
    <div id="child2">
        <h1>hello world</h1>
        <h1>hello world</h1>

    </div>

</div> */}

// const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",
//         {id:"child"},
//         [React.createElement("h1",{id:"heading"},"helloworld"),
//         React.createElement("h2",{id:"h2"},"h2 tag")
//     ])
// );
const parent= React.createElement(
    "div",
    {id:"parent"},[
    React.createElement("div",
        {id:"child"},
        [React.createElement("h1",{id:"heading"},"helloworld1"),
        React.createElement("h2",{id:"h2"},"h2 tag")
    ]),
        React.createElement("div",
            {id:"child"},
            [React.createElement("h1",{id:"heading"},"helloworld2"),
            React.createElement("h2",{id:"h2"},"h2 tag")
        ])]
);

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);