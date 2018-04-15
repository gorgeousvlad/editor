export default {  
  scene:{},
  elements: {
    common:{
      "1":{
        component:"div",
        thumb:"",
        label:"div",
        props:{
          type:"basic",
          text:"Button"
        }
      },
      "2":{
        component:"label",
        thumb:"",
        label:"текст"
      },
      "3":{
        component:"button",
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
        component:"input",
        thumb:"",
        label:"инпут"
      }
    },
    project1:{
      "1":{
        component:'switcher',
        thumb:"",
        label:"слово"
      }
    }
  },
  selected:0
}