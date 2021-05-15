import {
  Box,
  Button,
  Chip,
  Grid,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddTopHeader } from "../../Store/Action/TopHeaderAction";
import { RootStore } from "../../Store/Store";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const [linkChipText, setLinkChipText] = React.useState("");
  const [chipData, setChipData] = React.useState<any>([]);

  const { register, setValue, handleSubmit, control } = useForm<any>({
    mode: "onChange",
  });

  const topHeaderSelector = useSelector((state: RootStore) => state.topHeader);

  const handleLinkChipChange = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setChipData([
        ...chipData,
        { key: chipData.length + 1, label: event.target.value },
      ]);
      setLinkChipText("");
    }
  };

  const handleDelete = (chipToDelete: any) => {
    setChipData((chips: any) =>
      chips.filter((chip: any) => chip.key !== chipToDelete.key)
    );
  };

  const onSubmit = (data: any) => {
    console.log("data", data);
    // const submit_data = {
    //   phn_number: data.phn_number,
    // };
    // submit_data && dispatch(AddTopHeader(submit_data));
  };

  // console.log("selector", localStorage.getItem("state"));

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <InputLabel>Add Phone Number</InputLabel>
            <Controller // last ways
              name="phn_number"
              control={control}
              defaultValue=""
              rules={{ required: "First name required" }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <TextField
              variant="outlined"
              placeholder="number"
              name={register("home", { required: true }).name}
              inputRef={register("home", { required: true }).ref} // another ways
              onChange={register("home", { required: true }).onChange}
            />
            <TextField
              variant="outlined"
              placeholder="number"
              {...register("call")} // one way
            />
            {/* <TextField
              variant="outlined"
              placeholder="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLinkChipText(event.target.value);
              }}
              value={linkChipText}
              disabled={chipData.length >= 5}
              onKeyDown={handleLinkChipChange}
            /> */}
            {/* {chipData.map((data: any) => {
              return (
                <Chip
                  key={data.key}
                  label={data.label}
                  onDelete={() => handleDelete(data)}
                  size="small"
                  style={{
                    marginTop: "-8px",
                    marginBottom: "24px",
                    marginLeft: "16px",
                  }}
                />
              );
            })} */}
          </Box>
          <Button color="secondary" type="submit" variant="contained">
            Save All
          </Button>
          <Link to="/">homepage</Link>
        </form>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
