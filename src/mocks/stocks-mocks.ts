import type { StockItem } from '@/interfaces/stock-item';
import type { StockRecommendation } from '@/interfaces/stock-recommendation';

export const stockRecommendationsMock: StockRecommendation[] = [
    {
        ticker: 'NVDA',
        total_score: 92,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'NVIDIA\'s AI Dominance Continues to Drive Growth',
            'NVIDIA Expands AI Capabilities in Data Centers'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 92,
        currentQuote: {
            currentPrice: 154.31,
            change: 6.41,
            changePercentage: 4.33,
            high: 160.00,
            low: 150.00,
            open: 152.00,
            previousClose: 147.90
        }
    },
    {
        ticker: 'AAPL',
        total_score: 85,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Apple\'s New iPhone Launch Boosts Stock Performance',
            'Apple Expands Services Revenue with New Offerings'
        ],
        moving_average_crossover: 'HOLD',
        sentiment: 85,
        currentQuote: {
            currentPrice: 175.00,
            change: 3.50,
            changePercentage: 2.05,
            high: 178.00,
            low: 172.00,
            open: 174.00,
            previousClose: 171.50
        }
    },
    {
        ticker: 'TSLA',
        total_score: 90,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Tesla Expands Production in Europe',
            'Tesla Unveils New Electric Truck Model'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 90,
        currentQuote: {
            currentPrice: 250.75,
            change: 12.50,
            changePercentage: 5.25,
            high: 260.00,
            low: 245.00,
            open: 248.00,
            previousClose: 238.25
        }
    },
    {
        ticker: 'AMZN',
        total_score: 80,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Amazon Reports Record Sales During Prime Day',
            'Amazon Expands Logistics Network Globally'
        ],
        moving_average_crossover: 'HOLD',
        sentiment: 80,
        currentQuote: {
            currentPrice: 120.50,
            change: 2.75,
            changePercentage: 2.34,
            high: 122.00,
            low: 118.00,
            open: 119.50,
            previousClose: 117.75
        }
    },
    {
        ticker: 'MSFT',
        total_score: 88,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Microsoft Announces AI Integration in Office Suite',
            'Microsoft Cloud Revenue Surges in Q2'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 88,
        currentQuote: {
            currentPrice: 310.00,
            change: 8.00,
            changePercentage: 2.65,
            high: 315.00,
            low: 305.00,
            open: 308.00,
            previousClose: 302.00
        }
    },
    {
        ticker: 'GOOGL',
        total_score: 87,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Google Unveils New AI Search Features',
            'Alphabet Invests in Renewable Energy Projects'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 87,
        currentQuote: {
            currentPrice: 140.25,
            change: 4.50,
            changePercentage: 3.31,
            high: 142.00,
            low: 138.00,
            open: 139.50,
            previousClose: 135.75
        }
    },
    {
        ticker: 'META',
        total_score: 89,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Meta Expands Virtual Reality Offerings',
            'Meta Reports Growth in Advertising Revenue'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 89,
        currentQuote: {
            currentPrice: 280.00,
            change: 10.00,
            changePercentage: 3.70,
            high: 285.00,
            low: 275.00,
            open: 278.00,
            previousClose: 270.00
        }
    },
    {
        ticker: 'NFLX',
        total_score: 84,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Netflix Gains Subscribers with New Content',
            'Netflix Expands International Content Library'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 84,
        currentQuote: {
            currentPrice: 450.00,
            change: 15.00,
            changePercentage: 3.45,
            high: 460.00,
            low: 440.00,
            open: 445.00,
            previousClose: 435.00
        }
    },
    {
        ticker: 'ADBE',
        total_score: 91,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Adobe Launches AI-Powered Design Tools',
            'Adobe Reports Record Revenue Growth'
        ],
        moving_average_crossover: 'BUY',
        sentiment: 91,
        currentQuote: {
            currentPrice: 550.00,
            change: 20.00,
            changePercentage: 3.77,
            high: 560.00,
            low: 540.00,
            open: 545.00,
            previousClose: 530.00
        }
    },
    {
        ticker: 'INTC',
        total_score: 75,
        created_at: '2025-06-26T00:30:05.314Z',
        headlines: [
            'Intel Announces Next-Gen Processors',
            'Intel Faces Challenges in Semiconductor Market'
        ],
        moving_average_crossover: 'SELL',
        sentiment: 75,
        currentQuote: {
            currentPrice: 35.00,
            change: 1.50,
            changePercentage: 4.48,
            high: 36.00,
            low: 34.00,
            open: 34.50,
            previousClose: 33.50
        }
    }
];

export const stockOverviewMock: StockItem[] = [
    {
        id: 1,
        ticker: 'NVDA',
        target_from: 150,
        target_to: 160,
        company: 'NVIDIA Corporation',
        action: 'target raised by',
        brokerage: 'Morgan Stanley',
        rating_from: 'Hold',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 2,
        target_score: 1,
        currentQuote: {
            currentPrice: 154.31,
            change: 6.41,
            changePercentage: 4.33,
            high: 160.00,
            low: 150.00,
            open: 152.00,
            previousClose: 147.90
        }
    },
    {
        id: 2,
        ticker: 'AAPL',
        target_from: 170,
        target_to: 175,
        company: 'Apple Inc.',
        action: 'target raised by',
        brokerage: 'Goldman Sachs',
        rating_from: 'Neutral',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 1,
        target_score: 1,
        currentQuote: {
            currentPrice: 175.00,
            change: 3.50,
            changePercentage: 2.05,
            high: 178.00,
            low: 172.00,
            open: 174.00,
            previousClose: 171.50
        }
    },
    {
        id: 3,
        ticker: 'TSLA',
        target_from: 240,
        target_to: 260,
        company: 'Tesla Inc.',
        action: 'target raised by',
        brokerage: 'JP Morgan',
        rating_from: 'Hold',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 2,
        target_score: 1,
        currentQuote: {
            currentPrice: 250.75,
            change: 12.50,
            changePercentage: 5.25,
            high: 260.00,
            low: 245.00,
            open: 248.00,
            previousClose: 238.25
        }
    },
    {
        id: 4,
        ticker: 'AMZN',
        target_from: 115,
        target_to: 120,
        company: 'Amazon.com Inc.',
        action: 'target raised by',
        brokerage: 'Barclays',
        rating_from: 'Neutral',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 1,
        target_score: 1,
        currentQuote: {
            currentPrice: 120.50,
            change: 2.75,
            changePercentage: 2.34,
            high: 122.00,
            low: 118.00,
            open: 119.50,
            previousClose: 117.75
        }
    },
    {
        id: 5,
        ticker: 'MSFT',
        target_from: 300,
        target_to: 310,
        company: 'Microsoft Corporation',
        action: 'target raised by',
        brokerage: 'UBS',
        rating_from: 'Neutral',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 1,
        target_score: 1,
        currentQuote: {
            currentPrice: 310.00,
            change: 8.00,
            changePercentage: 2.65,
            high: 315.00,
            low: 305.00,
            open: 308.00,
            previousClose: 302.00
        }
    },
    {
        id: 6,
        ticker: 'GOOGL',
        target_from: 135,
        target_to: 140,
        company: 'Alphabet Inc.',
        action: 'target raised by',
        brokerage: 'Credit Suisse',
        rating_from: 'Hold',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 2,
        target_score: 1,
        currentQuote: {
            currentPrice: 140.25,
            change: 4.50,
            changePercentage: 3.31,
            high: 142.00,
            low: 138.00,
            open: 139.50,
            previousClose: 135.75
        }
    },
    {
        id: 7,
        ticker: 'META',
        target_from: 270,
        target_to: 280,
        company: 'Meta Platforms Inc.',
        action: 'target raised by',
        brokerage: 'Deutsche Bank',
        rating_from: 'Neutral',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 1,
        target_score: 1,
        currentQuote: {
            currentPrice: 280.00,
            change: 10.00,
            changePercentage: 3.70,
            high: 285.00,
            low: 275.00,
            open: 278.00,
            previousClose: 270.00
        }
    },
    {
        id: 8,
        ticker: 'NFLX',
        target_from: 440,
        target_to: 450,
        company: 'Netflix Inc.',
        action: 'target raised by',
        brokerage: 'Wells Fargo',
        rating_from: 'Hold',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 2,
        target_score: 1,
        currentQuote: {
            currentPrice: 450.00,
            change: 15.00,
            changePercentage: 3.45,
            high: 460.00,
            low: 440.00,
            open: 445.00,
            previousClose: 435.00
        }
    },
    {
        id: 9,
        ticker: 'ADBE',
        target_from: 540,
        target_to: 550,
        company: 'Adobe Inc.',
        action: 'target raised by',
        brokerage: 'RBC Capital',
        rating_from: 'Neutral',
        rating_to: 'Buy',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 1,
        target_score: 1,
        currentQuote: {
            currentPrice: 550.00,
            change: 20.00,
            changePercentage: 3.77,
            high: 560.00,
            low: 540.00,
            open: 545.00,
            previousClose: 530.00
        }
    },
    {
        id: 10,
        ticker: 'INTC',
        target_from: 30,
        target_to: 35,
        company: 'Intel Corporation',
        action: 'target raised by',
        brokerage: 'BMO Capital',
        rating_from: 'Sell',
        rating_to: 'Hold',
        time: '2025-06-26T00:30:05.314Z',
        rating_score: 0,
        target_score: 1,
        currentQuote: {
            currentPrice: 35.00,
            change: 1.50,
            changePercentage: 4.48,
            high: 36.00,
            low: 34.00,
            open: 34.50,
            previousClose: 33.50
        }
    }
];