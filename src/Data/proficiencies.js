const proficiencies = [
	{
		cardImg: "/FrontEndCard.png",
		headline: "Front-end",
		description:
			"Proficient with building React SPA and Nextjs for highly optimized FCP.",
		keyPoints: [
			"Responsive Designs",
			"Webpack Customizations",
			"Server Side Rendering with Nextjs",
			"Minimizing bundle size and Lower external dependencies",
			"CDN delivery of assets",
			"Lazy loaded SPA application in separate chunks",
			"Jest for unit testing",
			"Efficient state management",
			"Modular, reusable and clean code",
			"Utilizes polyfills to support older browsers",
			"Dockerizes for ease of development environment",
		],
	},
	{
		cardImg: "/backendCard.png",
		headline: "Back-end",
		description:
			"Proficient with building Services using tech Stack - Express, SQL, Redis(as cache layer).",
		keyPoints: [
			"Highly secure services",
			"Optimal Normalization in SQL schema",
			"Secure authentication layer and granular authorization for Admins",
			"Third party authorization & profile data management",
			"Auto session refresh & accurate session management",
			"Event driven services using messaging services like Kafka / AWS-SQS",
			"Implements cache layer to minimize response time and Database hits",
			"WebSocket utilization for chatting applications",
			"Well documented endpoints using Postman",
		],
	},
	{
		cardImg: "/analyticsCard.png",
		headline: "Logs & Analytics",
		description:
			"Will analyze logs from each request & service and utilize these metrics to build Dashboards for Business development.",
		keyPoints: [
			'Using ELK(ElasticSearch, Logstash & Kibana) stack',
            'Consuming service level logs from fileBeat to visualize & analyze service performance',
            'Utilizes lighting fast data fetching of ElasticSearch to primary read ontop of SQL DB queries',
            'Customized Dashboards for service performance and data analysis of business requirements',
            'Implements Full-text search engines for platform',
            'Appropriate match queries for most relevant results and desired ranking of results.',
		],
	},
];

export default proficiencies;
