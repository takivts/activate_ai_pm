export type MarketMetadata = {
  category?: string;
  market?: string;
  submarket?: string;
  industry?: string;
  buildingClass?: string;
  size?: string;
};

export type MarketData = {
  label: string;
  value: string;
};

export type MarketAnalysisData = {
  marketMetadata?: MarketMetadata;
  marketData?: MarketData[];
  keyInsights?: string[];
  suggestedFollowUps?: string[];
  summary?: string[];
};

export type VtsAiPrompt = {
  prompt: string;
  payload: MarketAnalysisData;
};

export const vtsAiPromptsWithContext: VtsAiPrompt[] = [
  {
    prompt: "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending month-over-month?",
        "What tenants are driving demand?",
        "Where to deploy resources for tour-driven growth?",
      ],
    },
  },
  {
    prompt: "How are rents trending month-over-month?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What's the average NER right now?",
        "What space sizes are most in demand right now?",
        "Where should I allocate capital based on current market conditions?",
      ],
    },
  },
  {
    prompt: "How are concessions trending month-over-month?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      ],
      suggestedFollowUps: [
        "How are lease durations trending?",
        "What is the average size of active requirements right now?",
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
      ],
    },
  },
  {
    prompt: "What's the average NER right now?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.",
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending month-over-month?",
        "What industries are boosting demand?",
        "Where to allocate capital per lease data?",
      ],
    },
  },
  {
    prompt: "How are lease durations trending?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are concessions trending month-over-month?",
        "Where should I prioritize capital allocation based on current velocity?",
        "What space sizes are most in demand right now?",
      ],
    },
  },
  {
    prompt: "What are the top industries driving demand right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending month-over-month?",
        "What is the average size of active requirements right now?",
        "Where to deploy resources for tour-driven growth?",
      ],
    },
  },
  {
    prompt: "What space sizes are most in demand right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What tenants are driving demand?",
        "What's the average NER right now?",
        "Where should I allocate capital based on current market conditions?",
      ],
    },
  },
  {
    prompt: "What industries are boosting demand?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are lease durations trending?",
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
        "Where should I prioritize capital allocation based on current velocity?",
      ],
    },
  },
  {
    prompt: "What tenants are driving demand?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What industries are boosting demand?",
        "Where to allocate capital per lease data?",
        "What are the top industries driving demand right now?",
      ],
    },
  },
  {
    prompt: "What is the average size of active requirements right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are concessions trending month-over-month?",
        "Where to deploy resources for tour-driven growth?",
        "What space sizes are most in demand right now?",
      ],
    },
  },
  {
    prompt: "Where should I allocate capital based on current market conditions?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
        "How are rents trending month-over-month?",
        "What tenants are driving demand?",
      ],
    },
  },
  {
    prompt: "Where should I prioritize capital allocation based on current velocity?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Where to allocate capital per lease data?",
        "What's the average NER right now?",
        "How are concessions trending month-over-month?",
      ],
    },
  },
  {
    prompt: "Where to allocate capital per lease data?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What is the average size of active requirements right now?",
        "How are lease durations trending?",
        "What industries are boosting demand?",
      ],
    },
  },
  {
    prompt: "Where to deploy resources for tour-driven growth?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What are the top industries driving demand right now?",
        "Where should I allocate capital based on current market conditions?",
        "What space sizes are most in demand right now?",
        "Portfolio Agent",
      ],
    },
  },
  {
    prompt: "Portfolio Agent",
    payload: {
      marketMetadata: {
        category: "Portfolio Agent",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      ],
      keyInsights: [
        "Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      ],
      suggestedFollowUps: [
        "Where should I allocate capital based on current market conditions?",
        "Which markets are most attractive for investment based on demand trends?",
        "What tenants are driving demand?",
      ],
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "What's the average rent right now?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
        "What is the typical TI allowance currently?",
      ],
    },
  },
  {
    prompt: "How are rents trending year-over-year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are concessions trending year over year?",
        "What tenants are driving demand?",
        "Which markets are attractive for investment via tour data?",
      ],
    },
  },
  {
    prompt: "How are concessions trending year over year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are gross rents trending year-over-year?",
        "Which submarkets are leading in active demand this month?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
  {
    prompt: "How are gross rents trending year-over-year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How has starting rent changed year-over-year?",
        "Which markets are best for investment per demand trends?",
        "What's the average rent right now?",
      ],
    },
  },
  {
    prompt: "How has starting rent changed year-over-year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What is the typical TI allowance currently?",
        "Which markets are attractive for investment based on tour activity?",
        "How are rents trending year-over-year?",
      ],
    },
  },
  {
    prompt: "What is the typical TI allowance currently?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which submarkets are seeing the most tenant tour activity right now?",
        "How are concessions trending year over year?",
        "Which markets are best for investment per demand trends?",
      ],
    },
  },
  // Market Demand
  {
    prompt: "Which submarkets are seeing the most tenant tour activity right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which submarkets have the highest unique tenant tours this month?",
        "How are gross rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
      ],
    },
  },
  {
    prompt: "Which submarkets have the highest unique tenant tours this month?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which submarkets are leading in active demand this month?",
        "How has starting rent changed year-over-year?",
        "Which markets are attractive for investment via tour data?",
      ],
    },
  },
  {
    prompt: "Which submarkets are leading in active demand this month?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What tenants are driving demand?",
        "What is the typical TI allowance currently?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
  {
    prompt: "What tenants are driving demand?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets are most attractive for investment based on demand trends?",
        "What's the average rent right now?",
        "How are rents trending year-over-year?",
      ],
    },
  },
  {
    prompt: "Which markets are most attractive for investment based on demand trends?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets are attractive for investment based on tour activity?",
        "How are concessions trending year over year?",
        "Which submarkets have the highest unique tenant tours this month?",
      ],
    },
  },
  {
    prompt: "Which markets are attractive for investment based on tour activity?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets are best for investment per demand trends?",
        "How are gross rents trending year-over-year?",
        "What tenants are driving demand?",
      ],
    },
  },
  {
    prompt: "Which markets are best for investment per demand trends?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets are attractive for investment via tour data?",
        "How has starting rent changed year-over-year?",
        "Which submarkets are leading in active demand this month?",
      ],
    },
  },
  {
    prompt: "Which markets are attractive for investment via tour data?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets show strongest demand growth for investment?",
        "What is the typical TI allowance currently?",
        "Which submarkets are seeing the most tenant tour activity right now?",
      ],
    },
  },
  {
    prompt: "Which markets show strongest demand growth for investment?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What's the average rent right now?",
        "How are rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
      ],
    },
  },
  {
    prompt: "Where to deploy resources for tour-driven growth?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What's the average rent right now?",
        "How are rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
        "Portfolio Agent",
      ],
    },
  },
  {
    prompt: "Portfolio Agent",
    payload: {
      marketMetadata: {
        category: "Portfolio Agent",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      ],
      keyInsights: [
        "Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      ],
      suggestedFollowUps: [
        "Which markets are attractive for investment based on tour activity?",
        "Which submarkets are leading in active demand this month?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
];
