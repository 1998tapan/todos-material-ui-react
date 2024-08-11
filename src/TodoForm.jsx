import { Create } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';

import { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (e) => (setText(e.target.value));

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-required"
                    label="New todo" onChange={handleChange} value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="create todo"
                                edge="end"
                                type='submit'
                            >
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    }} />
            </form>
        </ListItem>
    )
}