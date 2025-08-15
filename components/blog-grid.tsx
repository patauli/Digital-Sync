"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  "All",
  "Website Development",
  "Artificial Intelligence",
  "Digital Marketing",
  "SEO",
  "PPC",
  "Social Media Marketing",
  "Salesforce",
  "Bigin CRM",
]

const blogPosts = [
  // Website Development (10 posts)
  {
    id: 1,
    title: "10 Essential Features Every Modern Website Needs in 2024",
    excerpt: "Discover the must-have features that make websites successful in today's digital landscape.",
    category: "Website Development",
    author: "Vishwajeet",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/blog-web-dev-1.png",
    featured: true,
    slug: "essential-features-modern-website-2024",
  },
  {
    id: 2,
    title: "Responsive Web Design: Best Practices and Common Mistakes",
    excerpt: "Learn how to create websites that look perfect on every device and avoid common pitfalls.",
    category: "Website Development",
    author: "Arjun Kumar",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/blog-web-dev-2.png",
    slug: "responsive-web-design-practices-mistakes",
  },
  {
    id: 3,
    title: "The Complete Guide to Website Performance Optimization",
    excerpt: "Speed up your website and improve user experience with these proven optimization techniques.",
    category: "Website Development",
    author: "Vishwajeet",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/blog-web-dev-3.png",
    slug: "complete-guide-website-performance-optimization",
  },
  {
    id: 4,
    title: "Progressive Web Apps: The Future of Web Development",
    excerpt: "Understand how PWAs can transform your web presence and provide app-like experiences.",
    category: "Website Development",
    author: "Arjun Kumar",
    date: "2024-01-08",
    readTime: "10 min read",
    image: "/blog-web-dev-4.png",
    slug: "progressive-web-apps-future-web-development",
  },
  {
    id: 5,
    title: "Web Accessibility: Building Inclusive Digital Experiences",
    excerpt: "Make your website accessible to everyone with these essential accessibility guidelines.",
    category: "Website Development",
    author: "Vishwajeet",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/blog-web-dev-5.png",
    slug: "web-accessibility-building-inclusive-digital-experiences",
  },
  {
    id: 6,
    title: "E-commerce Website Development: From Concept to Launch",
    excerpt: "A comprehensive guide to building successful online stores that convert visitors into customers.",
    category: "Website Development",
    author: "Arjun Kumar",
    date: "2024-01-03",
    readTime: "15 min read",
    image: "/blog-web-dev-6.png",
    slug: "ecommerce-website-development-concept-launch",
  },
  {
    id: 7,
    title: "Website Security: Protecting Your Digital Assets",
    excerpt: "Essential security measures every website owner should implement to protect against threats.",
    category: "Website Development",
    author: "Vishwajeet",
    date: "2024-01-01",
    readTime: "11 min read",
    image: "/blog-web-dev-7.png",
    slug: "website-security-protecting-digital-assets",
  },
  {
    id: 8,
    title: "The Art of User Experience Design in Web Development",
    excerpt: "Create intuitive and engaging user experiences that keep visitors coming back.",
    category: "Website Development",
    author: "Arjun Kumar",
    date: "2023-12-28",
    readTime: "8 min read",
    image: "/blog-web-dev-8.png",
    slug: "art-user-experience-design-web-development",
  },
  {
    id: 9,
    title: "Content Management Systems: Choosing the Right Platform",
    excerpt: "Compare popular CMS options and find the perfect fit for your website needs.",
    category: "Website Development",
    author: "Vishwajeet",
    date: "2023-12-25",
    readTime: "7 min read",
    image: "/blog-web-dev-9.png",
    slug: "content-management-systems-choosing-right-platform",
  },
  {
    id: 10,
    title: "Website Maintenance: Keeping Your Site Running Smoothly",
    excerpt: "Essential maintenance tasks to ensure your website stays secure, fast, and up-to-date.",
    category: "Website Development",
    author: "Arjun Kumar",
    date: "2023-12-22",
    readTime: "6 min read",
    image: "/blog-web-dev-10.png",
    slug: "website-maintenance-keeping-site-running-smoothly",
  },

  // Artificial Intelligence (10 posts)
  {
    id: 11,
    title: "AI in Digital Marketing: Transforming Customer Experiences",
    excerpt:
      "Explore how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
    category: "Artificial Intelligence",
    author: "Vishwajeet",
    date: "2024-01-14",
    readTime: "10 min read",
    image: "/blog-ai-1.png",
    featured: true,
    slug: "ai-digital-marketing-transforming-customer-experiences",
  },
  {
    id: 12,
    title: "Chatbots and Customer Service: The AI Revolution",
    excerpt: "Discover how AI-powered chatbots are transforming customer service and support.",
    category: "Artificial Intelligence",
    author: "Robert Brown",
    date: "2024-01-11",
    readTime: "8 min read",
    image: "/blog-ai-2.png",
    slug: "chatbots-customer-service-ai-revolution",
  },
  {
    id: 13,
    title: "Machine Learning for Personalized Marketing Campaigns",
    excerpt: "Learn how machine learning algorithms can create highly targeted and personalized marketing experiences.",
    category: "Artificial Intelligence",
    author: "Vishwajeet",
    date: "2024-01-09",
    readTime: "12 min read",
    image: "/blog-ai-3.png",
    slug: "machine-learning-personalized-marketing-campaigns",
  },
  {
    id: 14,
    title: "AI-Powered Content Creation: Tools and Techniques",
    excerpt: "Explore the latest AI tools for content creation and how they can enhance your marketing efforts.",
    category: "Artificial Intelligence",
    author: "Neha Joshi",
    date: "2024-01-07",
    readTime: "9 min read",
    image: "/blog-ai-4.png",
    slug: "ai-powered-content-creation-tools-techniques",
  },
  {
    id: 15,
    title: "Predictive Analytics: Using AI to Forecast Business Trends",
    excerpt: "Harness the power of predictive analytics to make data-driven business decisions.",
    category: "Artificial Intelligence",
    author: "Vishwajeet",
    date: "2024-01-04",
    readTime: "11 min read",
    image: "/blog-ai-5.png",
    slug: "predictive-analytics-using-ai-forecast-business-trends",
  },
  {
    id: 16,
    title: "Voice Search Optimization in the Age of AI",
    excerpt: "Optimize your content for voice search and AI-powered virtual assistants.",
    category: "Artificial Intelligence",
    author: "Vipin Yadav",
    date: "2024-01-02",
    readTime: "7 min read",
    image: "/blog-ai-6.png",
    slug: "voice-search-optimization-age-ai",
  },
  {
    id: 17,
    title: "AI Ethics in Marketing: Responsible AI Implementation",
    excerpt: "Navigate the ethical considerations of using AI in marketing and business operations.",
    category: "Artificial Intelligence",
    author: "Robert Brown",
    date: "2023-12-30",
    readTime: "10 min read",
    image: "/blog-ai-7.png",
    slug: "ai-ethics-marketing-responsible-ai-implementation",
  },
  {
    id: 18,
    title: "Computer Vision in E-commerce: Visual Search and Beyond",
    excerpt: "Discover how computer vision technology is transforming online shopping experiences.",
    category: "Artificial Intelligence",
    author: "Vishwajeet",
    date: "2023-12-27",
    readTime: "8 min read",
    image: "/blog-ai-8.png",
    slug: "computer-vision-ecommerce-visual-search-beyond",
  },
  {
    id: 19,
    title: "Natural Language Processing for Better Customer Insights",
    excerpt: "Use NLP to analyze customer feedback and gain deeper insights into customer sentiment.",
    category: "Artificial Intelligence",
    author: "Neha Joshi",
    date: "2023-12-24",
    readTime: "9 min read",
    image: "/blog-ai-9.png",
    slug: "natural-language-processing-better-customer-insights",
  },
  {
    id: 20,
    title: "The Future of AI in Business: Trends and Predictions",
    excerpt: "Explore emerging AI trends and their potential impact on business operations and strategy.",
    category: "Artificial Intelligence",
    author: "Vishwajeet",
    date: "2023-12-21",
    readTime: "13 min read",
    image: "/blog-ai-10.png",
    slug: "future-ai-business-trends-predictions",
  },

  // Digital Marketing (10 posts)
  {
    id: 21,
    title: "Digital Marketing Strategy: Building a Comprehensive Plan",
    excerpt: "Create a winning digital marketing strategy that drives results and grows your business.",
    category: "Digital Marketing",
    author: "Vishwajeet",
    date: "2024-01-13",
    readTime: "14 min read",
    image: "/blog-digital-1.png",
    featured: true,
    slug: "digital-marketing-strategy-building-comprehensive-plan",
  },
  {
    id: 22,
    title: "Content Marketing ROI: Measuring Success and Impact",
    excerpt: "Learn how to measure and optimize the return on investment of your content marketing efforts.",
    category: "Digital Marketing",
    author: "Neha Joshi",
    date: "2024-01-06",
    readTime: "10 min read",
    image: "/blog-digital-2.png",
    slug: "content-marketing-roi-measuring-success-impact",
  },
  {
    id: 23,
    title: "Email Marketing Automation: Nurturing Leads Effectively",
    excerpt: "Implement automated email campaigns that nurture leads and drive conversions.",
    category: "Digital Marketing",
    author: "Sneha Gupta",
    date: "2023-12-31",
    readTime: "8 min read",
    image: "/blog-digital-3.png",
    slug: "email-marketing-automation-nurturing-leads-effectively",
  },
  {
    id: 24,
    title: "Influencer Marketing: Building Authentic Brand Partnerships",
    excerpt: "Develop successful influencer marketing campaigns that resonate with your target audience.",
    category: "Digital Marketing",
    author: "Sneha Gupta",
    date: "2023-12-29",
    readTime: "9 min read",
    image: "/blog-digital-4.png",
    slug: "influencer-marketing-building-authentic-brand-partnerships",
  },
  {
    id: 25,
    title: "Video Marketing: Creating Engaging Visual Content",
    excerpt: "Master the art of video marketing to capture attention and drive engagement.",
    category: "Digital Marketing",
    author: "Neha Joshi",
    date: "2023-12-26",
    readTime: "11 min read",
    image: "/blog-digital-5.png",
    slug: "video-marketing-creating-engaging-visual-content",
  },
  {
    id: 26,
    title: "Marketing Automation: Streamlining Your Campaigns",
    excerpt: "Implement marketing automation tools to improve efficiency and campaign performance.",
    category: "Digital Marketing",
    author: "Vishwajeet",
    date: "2023-12-23",
    readTime: "12 min read",
    image: "/blog-digital-6.png",
    slug: "marketing-automation-streamlining-campaigns",
  },
  {
    id: 27,
    title: "Customer Journey Mapping: Understanding Your Audience",
    excerpt: "Create detailed customer journey maps to optimize touchpoints and improve conversions.",
    category: "Digital Marketing",
    author: "Robert Brown",
    date: "2023-12-20",
    readTime: "10 min read",
    image: "/blog-digital-7.png",
    slug: "customer-journey-mapping-understanding-audience",
  },
  {
    id: 28,
    title: "Conversion Rate Optimization: Turning Visitors into Customers",
    excerpt: "Proven strategies to optimize your website and increase conversion rates.",
    category: "Digital Marketing",
    author: "Vishwajeet",
    date: "2023-12-18",
    readTime: "9 min read",
    image: "/blog-digital-8.png",
    slug: "conversion-rate-optimization-turning-visitors-customers",
  },
  {
    id: 29,
    title: "Brand Storytelling: Creating Emotional Connections",
    excerpt: "Craft compelling brand stories that resonate with your audience and build loyalty.",
    category: "Digital Marketing",
    author: "Neha Joshi",
    date: "2023-12-15",
    readTime: "8 min read",
    image: "/blog-digital-9.png",
    slug: "brand-storytelling-creating-emotional-connections",
  },
  {
    id: 30,
    title: "Omnichannel Marketing: Creating Seamless Customer Experiences",
    excerpt: "Develop integrated marketing campaigns across multiple channels for maximum impact.",
    category: "Digital Marketing",
    author: "Vishwajeet",
    date: "2023-12-12",
    readTime: "13 min read",
    image: "/blog-digital-10.png",
    slug: "omnichannel-marketing-creating-seamless-customer-experiences",
  },

  // SEO (10 posts)
  {
    id: 31,
    title: "SEO in 2024: Latest Algorithm Updates and Best Practices",
    excerpt: "Stay ahead of search engine algorithm changes with the latest SEO strategies and techniques.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2024-01-16",
    readTime: "12 min read",
    image: "/blog-seo-1.png",
    featured: true,
    slug: "seo-2024-latest-algorithm-updates-best-practices",
  },
  {
    id: 32,
    title: "Technical SEO: Optimizing Your Website's Foundation",
    excerpt: "Master technical SEO elements that improve your website's search engine visibility.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2024-01-08",
    readTime: "15 min read",
    image: "/blog-seo-2.png",
    slug: "technical-seo-optimizing-websites-foundation",
  },
  {
    id: 33,
    title: "Keyword Research: Finding the Right Terms for Your Business",
    excerpt: "Comprehensive guide to keyword research and selection for better search rankings.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2024-01-01",
    readTime: "10 min read",
    image: "/blog-seo-3.png",
    slug: "keyword-research-finding-right-terms-business",
  },
  {
    id: 34,
    title: "Local SEO: Dominating Your Geographic Market",
    excerpt: "Optimize your business for local search and attract customers in your area.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2023-12-28",
    readTime: "9 min read",
    image: "/blog-seo-4.png",
    slug: "local-seo-dominating-geographic-market",
  },
  {
    id: 35,
    title: "Link Building Strategies That Actually Work in 2024",
    excerpt: "Effective link building techniques to improve your website's authority and rankings.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2023-12-25",
    readTime: "11 min read",
    image: "/blog-seo-5.png",
    slug: "link-building-strategies-actually-work-2024",
  },
  {
    id: 36,
    title: "Content SEO: Creating Search-Friendly Content",
    excerpt: "Learn how to create content that ranks well and provides value to your audience.",
    category: "SEO",
    author: "Neha Joshi",
    date: "2023-12-22",
    readTime: "8 min read",
    image: "/blog-seo-6.png",
    slug: "content-seo-creating-search-friendly-content",
  },
  {
    id: 37,
    title: "Mobile SEO: Optimizing for Mobile-First Indexing",
    excerpt: "Ensure your website performs well in Google's mobile-first indexing environment.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2023-12-19",
    readTime: "7 min read",
    image: "/blog-seo-7.png",
    slug: "mobile-seo-optimizing-mobile-first-indexing",
  },
  {
    id: 38,
    title: "SEO Analytics: Measuring and Improving Performance",
    excerpt: "Track your SEO progress with the right metrics and tools for continuous improvement.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2023-12-16",
    readTime: "10 min read",
    image: "/blog-seo-8.png",
    slug: "seo-analytics-measuring-improving-performance",
  },
  {
    id: 39,
    title: "E-commerce SEO: Optimizing Online Stores for Search",
    excerpt: "Specialized SEO strategies for e-commerce websites to drive organic traffic and sales.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2023-12-13",
    readTime: "12 min read",
    image: "/blog-seo-9.png",
    slug: "ecommerce-seo-optimizing-online-stores-search",
  },
  {
    id: 40,
    title: "SEO Myths Debunked: What Really Matters for Rankings",
    excerpt: "Separate SEO facts from fiction and focus on strategies that actually impact rankings.",
    category: "SEO",
    author: "Vipin Yadav",
    date: "2023-12-10",
    readTime: "9 min read",
    image: "/blog-seo-10.png",
    slug: "seo-myths-debunked-what-really-matters-rankings",
  },

  // PPC (10 posts)
  {
    id: 41,
    title: "Google Ads Mastery: Creating High-Converting Campaigns",
    excerpt: "Master Google Ads with proven strategies for creating campaigns that deliver results.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2024-01-12",
    readTime: "13 min read",
    image: "/blog-ppc-1.png",
    featured: true,
    slug: "google-ads-mastery-creating-high-converting-campaigns",
  },
  {
    id: 42,
    title: "Facebook Ads Optimization: Maximizing Your ROI",
    excerpt: "Advanced Facebook advertising strategies to improve performance and reduce costs.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2024-01-05",
    readTime: "11 min read",
    image: "/blog-ppc-2.png",
    slug: "facebook-ads-optimization-maximizing-your-roi",
  },
  {
    id: 43,
    title: "PPC Landing Page Optimization: Converting Clicks to Customers",
    excerpt: "Design and optimize landing pages that convert PPC traffic into paying customers.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-30",
    readTime: "9 min read",
    image: "/blog-ppc-3.png",
    slug: "ppc-landing-page-optimization-converting-clicks-customers",
  },
  {
    id: 44,
    title: "Keyword Bidding Strategies for Maximum PPC Performance",
    excerpt: "Master bidding strategies to get the most value from your PPC advertising budget.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-27",
    readTime: "10 min read",
    image: "/blog-ppc-4.png",
    slug: "keyword-bidding-strategies-maximum-ppc-performance",
  },
  {
    id: 45,
    title: "PPC Campaign Structure: Building for Success",
    excerpt: "Learn how to structure your PPC campaigns for optimal performance and management.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-24",
    readTime: "8 min read",
    image: "/blog-ppc-5.png",
    slug: "ppc-campaign-structure-building-success",
  },
  {
    id: 46,
    title: "Remarketing Campaigns: Re-engaging Your Audience",
    excerpt: "Create effective remarketing campaigns to bring back visitors and increase conversions.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-21",
    readTime: "7 min read",
    image: "/blog-ppc-6.png",
    slug: "remarketing-campaigns-re-engaging-your-audience",
  },
  {
    id: 47,
    title: "PPC Budget Management: Getting More from Less",
    excerpt: "Optimize your PPC budget allocation for maximum return on advertising spend.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-18",
    readTime: "9 min read",
    image: "/blog-ppc-7.png",
    slug: "ppc-budget-management-getting-more-less",
  },
  {
    id: 48,
    title: "Ad Copy That Converts: Writing Compelling PPC Ads",
    excerpt: "Craft persuasive ad copy that captures attention and drives clicks and conversions.",
    category: "PPC",
    author: "Neha Joshi",
    date: "2023-12-15",
    readTime: "6 min read",
    image: "/blog-ppc-8.png",
    slug: "ad-copy-that-converts-writing-compelling-ppc-ads",
  },
  {
    id: 49,
    title: "PPC Analytics: Measuring Campaign Success",
    excerpt: "Track and analyze PPC performance with the right metrics and reporting tools.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-12",
    readTime: "11 min read",
    image: "/blog-ppc-9.png",
    slug: "ppc-analytics-measuring-campaign-success",
  },
  {
    id: 50,
    title: "Shopping Ads: Maximizing E-commerce PPC Performance",
    excerpt: "Optimize Google Shopping ads to drive more traffic and sales for your online store.",
    category: "PPC",
    author: "Vikram Singh",
    date: "2023-12-09",
    readTime: "10 min read",
    image: "/blog-ppc-10.png",
    slug: "shopping-ads-maximizing-ecommerce-ppc-performance",
  },

  // Social Media Marketing (10 posts)
  {
    id: 51,
    title: "Social Media Strategy: Building Your Brand's Online Presence",
    excerpt: "Develop a comprehensive social media strategy that builds brand awareness and engagement.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/blog-social-1.png",
    featured: true,
    slug: "social-media-strategy-building-brands-online-presence",
  },
  {
    id: 52,
    title: "Instagram Marketing: Visual Storytelling for Business",
    excerpt: "Master Instagram marketing with visual content that engages and converts followers.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2024-01-03",
    readTime: "9 min read",
    image: "/blog-social-2.png",
    slug: "instagram-marketing-visual-storytelling-business",
  },
  {
    id: 53,
    title: "LinkedIn Marketing: B2B Social Media Success",
    excerpt: "Leverage LinkedIn for B2B marketing and professional networking to grow your business.",
    category: "Social Media Marketing",
    author: "Robert Brown",
    date: "2023-12-29",
    readTime: "10 min read",
    image: "/blog-social-3.png",
    slug: "linkedin-marketing-b2b-social-media-success",
  },
  {
    id: 54,
    title: "TikTok Marketing: Reaching Gen Z and Millennial Audiences",
    excerpt: "Create engaging TikTok content that resonates with younger demographics.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2023-12-26",
    readTime: "8 min read",
    image: "/blog-social-4.png",
    slug: "tiktok-marketing-reaching-gen-z-millennial-audiences",
  },
  {
    id: 55,
    title: "Social Media Content Calendar: Planning for Success",
    excerpt: "Create and manage a social media content calendar that keeps your audience engaged.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2023-12-23",
    readTime: "7 min read",
    image: "/blog-social-5.png",
    slug: "social-media-content-calendar-planning-success",
  },
  {
    id: 56,
    title: "Social Media Analytics: Measuring Engagement and ROI",
    excerpt: "Track social media performance and optimize your strategy based on data insights.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2023-12-20",
    readTime: "9 min read",
    image: "/blog-social-6.png",
    slug: "social-media-analytics-measuring-engagement-roi",
  },
  {
    id: 57,
    title: "Community Management: Building Loyal Social Media Followers",
    excerpt: "Engage with your social media community to build lasting relationships and brand loyalty.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2023-12-17",
    readTime: "8 min read",
    image: "/blog-social-7.png",
    slug: "community-management-building-loyal-social-media-followers",
  },
  {
    id: 58,
    title: "Social Media Advertising: Paid Promotion Strategies",
    excerpt: "Maximize your social media advertising ROI with targeted campaigns and optimization.",
    category: "Social Media Marketing",
    author: "Vikram Singh",
    date: "2023-12-14",
    readTime: "11 min read",
    image: "/blog-social-8.png",
    slug: "social-media-advertising-paid-promotion-strategies",
  },
  {
    id: 59,
    title: "User-Generated Content: Leveraging Customer Advocacy",
    excerpt: "Encourage and leverage user-generated content to build trust and authenticity.",
    category: "Social Media Marketing",
    author: "Sneha Gupta",
    date: "2023-12-11",
    readTime: "6 min read",
    image: "/blog-social-9.png",
    slug: "user-generated-content-leveraging-customer-advocacy",
  },
  {
    id: 60,
    title: "Social Media Crisis Management: Protecting Your Brand",
    excerpt: "Handle social media crises effectively to protect your brand reputation and trust.",
    category: "Social Media Marketing",
    author: "Robert Brown",
    date: "2023-12-08",
    readTime: "10 min read",
    image: "/blog-social-10.png",
    slug: "social-media-crisis-management-protecting-your-brand",
  },

  // Salesforce (10 posts)
  {
    id: 61,
    title: "Salesforce Implementation: Getting Started with CRM Success",
    excerpt: "A comprehensive guide to implementing Salesforce CRM for maximum business impact.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2024-01-09",
    readTime: "15 min read",
    image: "/blog-salesforce-1.png",
    featured: true,
    slug: "salesforce-implementation-getting-started-crm-success",
  },
  {
    id: 62,
    title: "Salesforce Automation: Streamlining Your Sales Process",
    excerpt: "Automate your sales workflows with Salesforce to improve efficiency and close more deals.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2024-01-02",
    readTime: "12 min read",
    image: "/blog-salesforce-2.png",
    slug: "salesforce-automation-streamlining-sales-process",
  },
  {
    id: 63,
    title: "Salesforce Reporting: Making Data-Driven Decisions",
    excerpt: "Create powerful reports and dashboards in Salesforce to gain business insights.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-28",
    readTime: "10 min read",
    image: "/blog-salesforce-3.png",
    slug: "salesforce-reporting-making-data-driven-decisions",
  },
  {
    id: 64,
    title: "Salesforce Integration: Connecting Your Business Systems",
    excerpt: "Integrate Salesforce with other business applications for seamless data flow.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-25",
    readTime: "13 min read",
    image: "/blog-salesforce-4.png",
    slug: "salesforce-integration-connecting-business-systems",
  },
  {
    id: 65,
    title: "Salesforce Marketing Cloud: Personalized Customer Journeys",
    excerpt: "Leverage Salesforce Marketing Cloud to create personalized marketing experiences.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-22",
    readTime: "11 min read",
    image: "/blog-salesforce-5.png",
    slug: "salesforce-marketing-cloud-personalized-customer-journeys",
  },
  {
    id: 66,
    title: "Salesforce Service Cloud: Delivering Exceptional Customer Service",
    excerpt: "Use Salesforce Service Cloud to provide outstanding customer support and service.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-19",
    readTime: "9 min read",
    image: "/blog-salesforce-6.png",
    slug: "salesforce-service-cloud-delivering-exceptional-customer-service",
  },
  {
    id: 67,
    title: "Salesforce Customization: Tailoring CRM to Your Business",
    excerpt: "Customize Salesforce fields, objects, and workflows to match your business processes.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-16",
    readTime: "14 min read",
    image: "/blog-salesforce-7.png",
    slug: "salesforce-customization-tailoring-crm-business",
  },
  {
    id: 68,
    title: "Salesforce Mobile: CRM on the Go",
    excerpt: "Maximize productivity with Salesforce mobile apps and mobile-optimized workflows.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-13",
    readTime: "7 min read",
    image: "/blog-salesforce-8.png",
    slug: "salesforce-mobile-crm-go",
  },
  {
    id: 69,
    title: "Salesforce Security: Protecting Your Customer Data",
    excerpt: "Implement robust security measures in Salesforce to protect sensitive business data.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-10",
    readTime: "10 min read",
    image: "/blog-salesforce-9.png",
    slug: "salesforce-security-protecting-customer-data",
  },
  {
    id: 70,
    title: "Salesforce ROI: Measuring CRM Success and Value",
    excerpt: "Calculate and demonstrate the return on investment of your Salesforce implementation.",
    category: "Salesforce",
    author: "Robert Brown",
    date: "2023-12-07",
    readTime: "8 min read",
    image: "/blog-salesforce-10.png",
    slug: "salesforce-roi-measuring-crm-success-value",
  },

  // Bigin CRM (10 posts)
  {
    id: 71,
    title: "Bigin CRM: The Perfect CRM for Small Businesses",
    excerpt: "Discover why Bigin CRM is the ideal customer relationship management solution for small businesses.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2024-01-07",
    readTime: "9 min read",
    image: "/blog-bigin-1.png",
    featured: true,
    slug: "bigin-crm-perfect-crm-small-businesses",
  },
  {
    id: 72,
    title: "Getting Started with Bigin CRM: Setup and Configuration",
    excerpt: "Step-by-step guide to setting up and configuring Bigin CRM for your business needs.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-31",
    readTime: "8 min read",
    image: "/blog-bigin-2.png",
    slug: "getting-started-bigin-crm-setup-configuration",
  },
  {
    id: 73,
    title: "Bigin CRM vs Competitors: Why Choose Bigin",
    excerpt: "Compare Bigin CRM with other CRM solutions and understand its unique advantages.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-27",
    readTime: "10 min read",
    image: "/blog-bigin-3.png",
    slug: "bigin-crm-vs-competitors-why-choose-bigin",
  },
  {
    id: 74,
    title: "Pipeline Management in Bigin CRM: Tracking Your Sales",
    excerpt: "Effectively manage your sales pipeline using Bigin CRM's intuitive pipeline features.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-24",
    readTime: "7 min read",
    image: "/blog-bigin-4.png",
    slug: "pipeline-management-bigin-crm-tracking-sales",
  },
  {
    id: 75,
    title: "Bigin CRM Mobile App: CRM Anywhere, Anytime",
    excerpt: "Stay connected to your customers and sales data with Bigin CRM's mobile application.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-21",
    readTime: "6 min read",
    image: "/blog-bigin-5.png",
    slug: "bigin-crm-mobile-app-crm-anywhere-anytime",
  },
  {
    id: 76,
    title: "Contact Management in Bigin CRM: Organizing Your Relationships",
    excerpt: "Master contact management features in Bigin CRM to build stronger customer relationships.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-18",
    readTime: "8 min read",
    image: "/blog-bigin-6.png",
    slug: "contact-management-bigin-crm-organizing-relationships",
  },
  {
    id: 77,
    title: "Bigin CRM Integrations: Connecting Your Business Tools",
    excerpt: "Integrate Bigin CRM with your favorite business applications for seamless workflows.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-15",
    readTime: "9 min read",
    image: "/blog-bigin-7.png",
    slug: "bigin-crm-integrations-connecting-business-tools",
  },
  {
    id: 78,
    title: "Bigin CRM Reporting: Insights for Better Decision Making",
    excerpt: "Generate meaningful reports in Bigin CRM to track performance and make informed decisions.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-12",
    readTime: "7 min read",
    image: "/blog-bigin-8.png",
    slug: "bigin-crm-reporting-insights-better-decision-making",
  },
  {
    id: 79,
    title: "Team Collaboration in Bigin CRM: Working Together Effectively",
    excerpt: "Enhance team collaboration and communication using Bigin CRM's collaborative features.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-09",
    readTime: "8 min read",
    image: "/blog-bigin-9.png",
    slug: "team-collaboration-bigin-crm-working-together-effectively",
  },
  {
    id: 80,
    title: "Bigin CRM Best Practices: Maximizing Your CRM Investment",
    excerpt: "Learn best practices for using Bigin CRM to get the most value from your CRM investment.",
    category: "Bigin CRM",
    author: "Robert Brown",
    date: "2023-12-06",
    readTime: "10 min read",
    image: "/blog-bigin-10.png",
    slug: "bigin-crm-best-practices-maximizing-your-crm-investment",
  },
]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(12)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 12)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category)
                setVisiblePosts(12)
              }}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .slice(0, 2)
                .map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={
                            post.image ||
                            `/placeholder.svg?height=300&width=600&query=${encodeURIComponent(post.title)}`
                          }
                          alt={post.title}
                          width={600}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="text-center mt-12">
            <Button onClick={loadMorePosts} size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 text-muted-foreground">
          Showing {displayedPosts.length} of {filteredPosts.length} articles
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </div>
      </div>
    </section>
  )
}
