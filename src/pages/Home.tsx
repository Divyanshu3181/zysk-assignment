import { Inbox, Users, BarChart, MessageSquare, Link as LinkIcon, Heart, Play } from 'lucide-react';
import Feature from '../components/Feature';
import CompanyLogo from '../components/CompanyLogo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

export default function Home() {

  const features = [
    {
      icon: Inbox,
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: MessageSquare,
      title: "Deliver instant answers",
      description: "Connect with customers instantly through real-time messaging and quick responses."
    },
    {
      icon: BarChart,
      title: "Manage your team with reports",
      description: "Get detailed insights into your team's performance and make data-driven decisions."
    },
    {
      icon: Users,
      title: "Connect with customers",
      description: "Build stronger relationships with your customers through personalized interactions."
    },
    {
      icon: LinkIcon,
      title: "Connect the tools you already use",
      description: "Integrate seamlessly with your existing workflow and favorite tools."
    },
    {
      icon: Heart,
      title: "Our people make the difference",
      description: "Backed by a team of experts committed to your success."
    }
  ];

  const companies = [
    { name: "Boldshift", logo: "boldshift.jpeg" },
    { name: "Lightbox", logo: "Lightbox.jpeg" },
    { name: "FeatherDev", logo: "FeatherDev.jpeg" },
    { name: "Spherule", logo: "Spherule.jpeg" },
    { name: "GlobalBank", logo: "GlobalBank.png" },
    { name: "Neitzsche", logo: "Neitzsche.png" }
  ];

  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
          <span className="text-gray-900 bg-white px-3 py-1 rounded-full text-sm">New feature</span>
          <span className="text-gray-600">Check out the team dashboard</span>
          <span className="text-gray-400">→</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-16">
          <button className="inline-flex items-center space-x-2 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:border-gray-300">
            <Play className="h-5 w-5" />
            <span>Demo</span>
          </button>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
            Sign up
          </button>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <img 
            src="Container.png" 
            alt="Dashboard Preview" 
            className="rounded-2xl shadow-2xl border border-gray-200"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-gray-600 mb-10">
            Join 4000+ companies already growing
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <CompanyLogo key={index} {...company} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Analytics that feels like it's from the future
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. 
              Trusted by over 4,000 startups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-xl font-semibold">Sisyphus</span>
              </div>
            </div>
            
            <blockquote className="max-w-4xl">
              <p className="text-3xl font-medium text-gray-900 mb-12">
                "We've been using Untitled to kick start every new project and can't imagine working without it."
              </p>
            </blockquote>

            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Candice Wu"
                className="w-14 h-14 rounded-full mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">Candice Wu</h4>
                <p className="text-gray-600">Product Manager, Sisyphus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <BlogSection />
      <div className="bg-gray-50 py-12 px-6 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Start your free trial</h2>
      <p className="mt-4 text-gray-600">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
          Learn more
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Get started
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
}