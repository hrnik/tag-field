import { createInput, clearTags, createTags, createElementWithClass } from "./dom";
import createTagService from "./service";

const TagField = ({
  container,
  isValidTag = () => true,
  delimiters = [" ", ",", ";"],
  placeholder = "add more people...",
} = {}) => {
  const tagFieldContainer = createElementWithClass("div", "tag-field");
  container.appendChild(tagFieldContainer);

  const tagService = createTagService({
    isValidTag,
  });

  const input = createInput({
    delimiters,
    tagService,
    placeholder,
  });

  const renderTags = ({ tagService, container }) => {
    clearTags(container);

    const tagElements = createTags({ tagService });

    tagElements.forEach(item => {
      input.insertAdjacentElement("beforebegin", item);
    });
  };

  tagFieldContainer.appendChild(input);

  renderTags({ container, tagService });

  tagService.on("list_change", tags => {
    renderTags({ container, tagService });
  });

  return {
    ...tagService,
  };
};

export default TagField;
