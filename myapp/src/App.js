
import { createSlice , createAsynThunk} from "@reduxjs/toolkit";

//action
export const fetchdata= createAsynThunk('fetchdata', async()=>{
const response=await fetch("https://api.spacexdata.com/v4/dragons");
return response.json();
});

const dragonSlice= createSlice({
    name: "data",
    initialState:
    {isLoading:false,
    data:null,
    isError: false,
},
    extraReducers: (builder) =>{
        builder.addCase(fetchdata.pending, (state, action)=>{
            state.isLoading=false;
        })
        builder.addCase(fetchdata.response, (state,action )=> {state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchdata.rejected,(state,action)=>{
            console.log("Error detection",action.rejected);
            state.isError=true;
        })
    },
});

export default dragonSlice.reducer;
