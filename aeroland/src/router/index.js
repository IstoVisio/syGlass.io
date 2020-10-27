import HomeBranding from '../pages/HomeBranding'
import HomeSass from '../pages/HomeSass'
import HomeSoftware from '../pages/HomeSoftware'
import HomeStartUp from '../pages/HomeStartUp'
import HomeAppLanding from '../pages/HomeAppLanding'
import HomeShowcase from '../pages/HomeShowcase'
import HomeEbook from '../pages/HomeEbook'
import HomeClinic from '../pages/HomeClinic'
import HomePayment from '../pages/HomePayment'
import HomeAgency from '../pages/HomeAgency'
import HomeProductShowcase from '../pages/HomeProductShowcase'
import ElementTabs from '../pages/elements/ElementTabs'
import ElementAccordion from '../pages/elements/ElementAccordion'
import ElementGradation from '../pages/elements/ElementGradation'
import ElementBoxIcon from '../pages/elements/ElementBoxIcon'
import ElementButtons from '../pages/elements/ElementButtons'
import ElementCta from '../pages/elements/ElementCta'
import ElementPopupVideo from '../pages/elements/ElementPopupVideo'
import ElementPricingBox from '../pages/elements/ElementPricingBox'
import ElementProgressBar from '../pages/elements/ElementProgressBar'
import ElementProgressCircle from '../pages/elements/ElementProgressCircle'
import ElementTeamMember from '../pages/elements/ElementTeamMember'
import ElementTestimonial from '../pages/elements/ElementTestimonial'
import ElementCounters from '../pages/elements/ElementCounters'
import PortfolioGrid from '../pages/portfolio/PortfolioGrid'
import PortfolioGridWide from '../pages/portfolio/PortfolioGridWide'
import PortfolioGridCaption from '../pages/portfolio/PortfolioGridCaption'
import PortfolioGridCaptionWide from '../pages/portfolio/PortfolioGridCaptionWide'
import PortfolioMasonry from '../pages/portfolio/PortfolioMasonry'
import PortfolioMasonryCaption from '../pages/portfolio/PortfolioMasonryCaption'
import PortfolioMasonryWide from '../pages/portfolio/PortfolioMasonryWide'
import PortfolioDetails from '../pages/portfolio/PortfolioDetails'
import PortfolioDetailsTwo from '../pages/portfolio/PortfolioDetailsTwo'
import BlogListLargeImage from '../pages/blog/BlogListLargeImage'
import BlogDetails from '../pages/blog/BlogDetails'
import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',
        name: 'HomeBranding',
        component: HomeBranding
    },
    {
        path:'/sass',
        name: 'HomeSass',
        component: HomeSass
    },
    {
        path:'/software',
        name: 'HomeSoftware',
        component: HomeSoftware
    },
    {
        path:'/start-up',
        name: 'HomeStartUp',
        component: HomeStartUp
    },
    {
        path:'/app-landing',
        name: 'HomeAppLanding',
        component: HomeAppLanding
    },
    {
        path:'/Showcase',
        name: 'HomeShowcase',
        component: HomeShowcase
    },
    {
        path:'/ebook',
        name: 'HomeEbook',
        component: HomeEbook
    },
    {
        path:'/clinic',
        name: 'HomeClinic',
        component: HomeClinic
    },
    {
        path:'/payment',
        name: 'HomePayment',
        component: HomePayment
    },
    {
        path:'/agency',
        name: 'HomeAgency',
        component: HomeAgency
    },
    {
        path:'/product-showcase',
        name: 'HomeProductShowcase',
        component: HomeProductShowcase
    },
    {
        path:'/element-tab',
        name: 'ElementTabs',
        component: ElementTabs
    },
    {
        path:'/element-accordion',
        name: 'ElementAccordion',
        component: ElementAccordion
    },
    {
        path:'/element-gradation',
        name: 'ElementGradation',
        component: ElementGradation
    },
    {
        path:'/element-box-icon',
        name: 'ElementBoxIcon',
        component: ElementBoxIcon
    },
    {
        path:'/element-buttons',
        name: 'ElementButtons',
        component: ElementButtons
    },
    {
        path:'/element-cta',
        name: 'ElementCta',
        component: ElementCta
    },
    {
        path:'/element-popup-video',
        name: 'ElementPopupVideo',
        component: ElementPopupVideo
    },
    {
        path:'/element-pricing-box',
        name: 'ElementPricingBox',
        component: ElementPricingBox
    },
    {
        path:'/element-progress-bar',
        name: 'ElementProgressBar',
        component: ElementProgressBar
    },
    {
        path:'/element-progress-circle',
        name: 'ElementProgressCircle',
        component: ElementProgressCircle
    },
    {
        path:'/element-team-member',
        name: 'ElementTeamMember',
        component: ElementTeamMember
    },
    {
        path:'/element-testimonial',
        name: 'ElementTestimonial',
        component: ElementTestimonial
    },
    {
        path:'/element-counters',
        name: 'ElementCounters',
        component: ElementCounters
    },
    {
        path:'/portfolio-grid',
        name: 'PortfolioGrid',
        component: PortfolioGrid
    },
    {
        path:'/portfolio-grid-wide',
        name: 'PortfolioGridWide',
        component: PortfolioGridWide
    },
    {
        path:'/portfolio-grid-caption',
        name: 'PortfolioGridCaption',
        component: PortfolioGridCaption
    },
    {
        path:'/portfolio-grid-caption-wide',
        name: 'PortfolioGridCaptionWide',
        component: PortfolioGridCaptionWide
    },
    {
        path:'/portfolio-masonry',
        name: 'PortfolioMasonry',
        component: PortfolioMasonry
    },
    {
        path:'/portfolio-masonry-caption',
        name: 'PortfolioMasonryCaption',
        component: PortfolioMasonryCaption
    },
    {
        path:'/portfolio-masonry-wide',
        name: 'PortfolioMasonryWide',
        component: PortfolioMasonryWide
    },
    {
        path:'/portfolio-details',
        name: 'PortfolioDetails',
        component: PortfolioDetails
    },
    {
        path:'/portfolio-details-two',
        name: 'PortfolioDetailsTwo',
        component: PortfolioDetailsTwo
    },
    {
        path:'/blog-list-large-image',
        name: 'BlogListLargeImage',
        component: BlogListLargeImage
    },
    {
        path:'/blog-details',
        name: 'BlogDetails',
        component: BlogDetails
    },
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];