import {HoneyNewsFeed} from "./honey-news-feed";

describe('Unit test: honey-news satisfy', () => {

  it('should init the feedLoader variable', () => {
    const component = new HoneyNewsFeed();

    expect(component.feedLoader).not.toBeNull();
  });


});



