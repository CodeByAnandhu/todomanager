import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';


export default compose(
    withState('value', 'setValue', props => {
        return props.value || ''
    }),
    withHandlers({
        handleKeyUp: ({ addNew, setValue }) => e => {
            const text = e.target.value.trim();
           
            
            if (e.keyCode === KeyCode.KEY_RETURN && text) {
                console.log("text",text);
                addNew(text);
                setValue('');
            }
        },
        handleChange: ({ setValue }) => e => {
            setValue(e.target.value);
        }
    })
);
