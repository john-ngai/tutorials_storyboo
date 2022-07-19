/**
 * There are two basic levels of organization in Storybook:
 * the component and its child stories. Think of each story
 * as a permutation of a component. You can have as many stories
 * per component as you need.
 * 
   * Component
     * Story 
     * Story
     * Story
 */

import Tasks from './Tasks';

/**
 * To tell Storybook about the component we are documenting, we
 * create a default export that contains:
   * 1) the component itself, and
   * 2) the title (how to identify the component in Storybook's sidebar)
 */
export default {
  component: Tasks,
  title: 'Tasks'
};

/**
 * To define and generate our stories, we export a function for each
 * of our test states. This returns a functional component with the
 * exact state that we're looking to test.
 * 
 * BEST PRACTICE: Using a Template variable will reduce the amount of
 * code you need to write and maintain.
 */
const Template = args => <Tasks {...args} />;


/**
 * The bind() method creates a new function that, when called, has its
 * 'this' keyword set to the provided value. In Storybook, this method
 * is used to allow each exported story to set its own properties.
 */

// Story #1
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

// Story #2
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  }
};

// Story #3
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  }
};
