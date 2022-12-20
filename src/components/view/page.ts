interface Page {
  render: string;
}

interface PathsDescriptions {
  [key: string]: {
    name: string;
    title: string;
    description: string;
    render: string;
  };
}

export { Page, PathsDescriptions };
