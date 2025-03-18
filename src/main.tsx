import { Devvit, useState } from '@devvit/public-api';

Devvit.addCustomPostType({
  name: 'Caption This!',
  render: (context) => {
    const [counter, setCounter] = useState(0);
    return (
      <vstack alignment="center middle" height="100%" gap="large">
        <text size="xxlarge" weight="bold">Enter Caption For This Meme!</text>

        
        
        <button appearance="primary">Submit!</button>
        {counter ? <text>{`You clicked ${counter} time(s)!`}</text> : <text>&nbsp;</text>}
      </vstack>
    );
  },
});

export default Devvit;