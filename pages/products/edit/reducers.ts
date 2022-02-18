import { Tag } from "../../../interfaces/Tag";
import { EditProductState } from "./EditProductState";

enum EditTagsActionType {
    SET_TAGS = 'SET_TAGS',
    REMOVE_TAG = 'REMOVE_TAG',
    ADD_TAG = 'ADD_TAG',
}

interface EditTagsAction {
    type: EditTagsActionType
    payload: any
}

const editTagsReducer = (state: EditProductState, action: EditTagsAction): EditProductState => {
    switch(action.type) {
        case EditTagsActionType.SET_TAGS:
            const newTags = action.payload as Array<Tag>

            return {
                tags: newTags
            }

        case EditTagsActionType.REMOVE_TAG:
            const removedTag = action.payload as Tag

            const tags: Array<Tag> = state.tags.filter(tag =>
                tag.id !== removedTag.id
            )

            return {
                tags,
            }

        case EditTagsActionType.ADD_TAG:
            const addedTag = action.payload as Tag
            
            return {
                tags: [
                    ...state.tags,
                    addedTag,
                ]
            }

        default: return state
    }
}

export { editTagsReducer, type EditTagsAction, EditTagsActionType }