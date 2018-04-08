export default {  
  scene:{},
  elements: {
    common:{
      "1":{
        name:"div",
        thumb:"",
        label:"div",
        props:{
          type:"basic",
          text:"Button"
        }
      },
      "2":{
        name:"label",
        thumb:"",
        label:"текст"
      },
      "3":{
        name:"button",
        thumb:"button.svg",
        label:"кнопка",
        props:{
          type:"basic",
          text:"Button"
        },
        propTypes: {
          type: ["basic", "next", "restart"]
        }
      },
      "4":{
        name:"input",
        thumb:"",
        label:"инпут"
      }
    },
    project1:{
      "1":{
        name:'switcher',
        thumb:"",
        label:"слово"
      }
    }
  },
  selected:0
}