import {
    StyledTopBox,
    StyledProfilePaper,
    StyledBottomBox, StyledIconBox
} from "./CandidateProfile.styles";
import {Box, Grid} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledWorkIcon} from "../atoms/StyledWorkIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";

export default function CandidateProfileExperience() {

    const [isEdit, setIsEdit] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

    const handleAddClick = () => {
        setIsAdd(true);
    };

    const handleSaveAddClick = () => {
        setIsAdd(false);
    };

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveEditClick = () => {
        setIsEdit(false);
    };

    return (
        <StyledProfilePaper>
            <Grid container>
                <StyledTopBox>
                    <StyledWorkIcon/>
                    <ProfileContainerTitle text={'Experience'}/>
                    <StyledIconBox>
                        {/* Add button */}
                        {isAdd ? (
                            <IconButton onClick={handleSaveAddClick}>
                                <StyledCheckIcon/>
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleAddClick}>
                                <StyledAddIcon/>
                            </IconButton>
                        )}
                    </StyledIconBox>
                </StyledTopBox>
                <StyledBottomBox>
                    <Box>
                        <span>Experience 1</span>
                        <StyledIconBox>
                            {/* Edit button */}
                            {isEdit ? (
                                <IconButton onClick={handleSaveEditClick}>
                                    <StyledCheckIcon/>
                                </IconButton>
                            ) : (
                                <IconButton onClick={handleEditClick}>
                                    <StyledEditIcon/>
                                </IconButton>
                            )}
                        </StyledIconBox>
                    </Box>
                    <Box>
                        <span>Experience 2</span>
                        <StyledIconBox>
                            {/* Edit button */}
                            {isEdit ? (
                                <IconButton onClick={handleSaveEditClick}>
                                    <StyledCheckIcon/>
                                </IconButton>
                            ) : (
                                <IconButton onClick={handleEditClick}>
                                    <StyledEditIcon/>
                                </IconButton>
                            )}
                        </StyledIconBox>
                    </Box>
                </StyledBottomBox>

            </Grid>
        </StyledProfilePaper>
    );
}