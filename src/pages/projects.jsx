import Badge from '../components/badge';
import '../styles/pages/projects.css';

const SECTIONS = [
  {
    eyebrow: 'Consulting Projects',
    title:   'Statistical Consulting',
    lead:    'Applied statistics for clinical and academic research teams, through McGill University.',
    projects: [
      {
        category:    'Survival Analysis · Oncology',
        title:       'G-CSF and Survival in Advanced Non-Small Cell Lung Cancer',
        description: 'Survival analysis for the Montreal Jewish General Hospital team on 127 advanced NSCLC patients. Estimated Kaplan-Meier curves and log-rank tests, used swimmer plots to expose immortal time bias in a fixed-covariate Cox model, then corrected it with a 120-day landmark analysis and a time-dependent (Mantel-Byar) Cox model, validated with Schoenfeld, deviance and martingale residuals.',
        outcome:     'The apparent survival benefit was entirely due to immortal time bias; after correction, G-CSF had no significant effect on survival.',
        tags:        ['Time-Dependent Cox', 'Landmark Analysis', 'Kaplan-Meier', 'Log-Rank Test', 'R'],
        nda:         true,
      },
      {
        category:    'Ordinal Regression · Language Research',
        title:       'Persuasive Communication in Autistic and Non-Autistic Adolescents',
        description: 'Analysis of persuasive-argument scores for 55 French-speaking adolescents. Used Wilcoxon rank-sum tests for group comparisons given ordinal data and a small autistic group, then fit cumulative link (ordinal logistic) models with and without group interactions, selected by AIC, and tested the proportional odds assumption with scale tests.',
        outcome:     'The interaction model was preferred: manner of delivery related to convincingness differently by diagnostic group.',
        tags:        ['Cumulative Link Models', 'Ordinal Logistic Regression', 'R'],
        nda:         true,
      },
      {
        category:    'Causal Inference · Surgery',
        title:       'Airway Management After Maxillary Reconstruction',
        description: "Retrospective study of 184 patients comparing tracheostomy with delayed extubation. Estimated propensity scores with logistic regression and a decision-tree alternative, then compared stabilized, trimmed IPTW with full optimal matching in MatchIt. Fit Gamma, log-normal and negative binomial GLMs for skewed length of stay, with Love plot, Breusch-Pagan and Cook's distance diagnostics.",
        outcome:     'Adjustment attenuated the effect: naive comparisons overstate the apparent harm of tracheostomy.',
        tags:        ['Propensity Scores', 'IPTW', 'Full Optimal Matching', 'Gamma GLM', 'Decision Trees', 'R'],
        code:        'https://github.com/',
      },
      {
        category:    'Logistic Regression · Endocrinology',
        title:       'Autoimmune Disease in Prolactinoma vs. Non-Functioning Adenoma',
        description: "Binomial logistic regression on 218 pituitary adenoma patients, first fit on complete cases to check linearity, multicollinearity and influence. Imputed missing data with MICE (logistic regression and predictive mean matching), set the number of imputations with howManyImputations and von Hippel's two-step rule, and pooled estimates with Rubin's Rules.",
        outcome:     'Prolactinoma patients had ~2× the odds of autoimmune disease; each added year of age raised the odds ~4%.',
        tags:        ['Logistic Regression', 'MICE', 'Predictive Mean Matching', 'Data Imputations', 'R'],
        code:        'https://github.com/sloholt/prolactinoma-autoimmune-prevalence',
      },
    ],
  },
  {
    eyebrow: 'Partner Projects',
    title:   'Industry Collaborations',
    lead:    'Data science prototypes built with industry partners as part of my practicum at McGill University.',
    projects: [
      {
        category:    'Time Series · Energy · Olameter',
        title:       'Validating Geothermal Heat Pump Simulations with Real Meter Data',
        description: 'Validated a proprietary geothermal simulation tool against real meter data. Integrated high-frequency time series with simulation outputs and environmental inputs, aligned differing periods and intervals through aggregation, computed efficiency from thermal output and electrical input by operating state, and applied temperature-dependent fluid properties to heat transfer calculations.',
        outcome:     'Delivered a reproducible validation pipeline with evidence-based recommendations for model calibration.',
        tags:        ['Time-Series Integration', 'Temporal Aggregation', 'Efficiency Metrics', 'Thermodynamic Modelling', 'Simulation Validation', 'R'],
        nda:         true,
      },
      {
        category:    'Geospatial Analytics · Banking · Synechron',
        title:       'Bank Branch and ATM Network Optimization',
        description: 'Geospatial prototype built in R for branch and ATM site selection. Harmonized demographic, transit, zoning and real estate data across coordinate systems, built weighted demand surfaces, ran location-allocation with travel-time network analysis, ranked sites with spatial interaction models, and delivered an R Shiny dashboard alongside an ArcGIS implementation in Python.',
        outcome:     'Expansion recommendations across three Canadian metro regions, delivered via R Shiny and ArcGIS.',
        tags:        ['Location-Allocation', 'Spatial Interaction Models', 'Network Analysis', 'R Shiny', 'ArcGIS', 'R', 'Python'],
        nda:         true,
      },
    ],
  },
  {
    eyebrow: 'Finance Projects',
    title:   'Quantitative Finance',
    lead:    'Portfolio construction, optimization and backtesting with financial market data.',
    projects: [
      {
        category:    'Portfolio Theory · Optimization · Backtesting',
        title:       'Mean-Variance Portfolio Optimization of Sector ETFs',
        description: 'Built Markowitz portfolios for 11 SPDR sector ETFs from 96 months of returns, finding the minimum-variance, efficient and max-Sharpe portfolios along with the efficient frontier and capital allocation line. Then backtested 12 variants (CAPM-shrunk means, Ledoit-Wolf covariance, weight caps) on 36 unseen months against a client portfolio and 10,000 random ones.',
        outcome:     'Long-only max-Sharpe portfolios beat the client out of sample (Sharpe 1.27 vs 1.02); unconstrained portfolios fell from 1.47 in-sample to 0.01.',
        tags:        ['Mean-Variance Optimization', 'Efficient Frontier', 'Ledoit-Wolf Shrinkage', 'CAPM', 'Rolling Backtest', 'Python', 'Excel'],
        code:        'https://github.com/sloholt/quant_finance_projects/tree/main/portfolio_optimization',
      },
    ],
  },
  {
    eyebrow: 'Other Projects',
    title:   'Independent Work',
    lead:    'Independent research, machine learning and web development projects.',
    projects: [
      {
        category:    'Sports Analytics · Econometrics · Dashboard',
        title:       'Modeling the Impact of Salary Distribution on NHL Team Success',
        description: 'Computed team Gini coefficients from Spotrac cap hits across 10 NHL seasons (2015–2024). Modelled regulation + overtime wins in R with a Poisson GLM (Gini, Gini² and lagged wins) and an Arellano-Bond dynamic panel GMM to address endogeneity, then built an interactive dashboard in Python with Plotly Dash and custom HTML/CSS.',
        outcome:     'A concave relationship: teams win most near a Gini of ~0.408, balancing star salaries with cost-effective depth.',
        tags:        ['Poisson GLM', 'Dynamic GMM', 'Econometrics', 'R', 'Python', 'Plotly Dash', 'HTML/CSS'],
        live:        { label: 'View live dashboard', href: 'https://nhl-salary-inequality-analysis-dash.onrender.com/' },
        code:        'https://github.com/sloholt/NHL-Salary-Inequality-Analysis',
      },
      {
        category:    'Machine Learning · Regression · Real Estate',
        title:       'Predicting Austin Short-Term Rental Prices',
        description: 'Predicted nightly Airbnb prices for ~7,150 Austin listings from listing, host, location and amenity features. Built a reproducible R pipeline with caret and recipes, log-transformed price after OLS residual diagnostics, added orthogonal polynomial terms, and tuned six models from OLS to gradient boosting on shared 5-fold CV folds with an 80/20 held-out test set.',
        outcome:     'Gradient boosting performed best (test RMSE 0.345 on log price), about 15% lower than the OLS baseline (0.405).',
        tags:        ['Gradient Boosting', 'Random Forest', 'Ridge / Lasso', 'Cross-Validation', 'R'],
        code:        'https://github.com/sloholt/atx-str-price-model',
      },
      {
        category:    'Web Development · UI Design',
        title:       'Elli & Winston: A Custom Wedding Website',
        description: 'Designed in Figma and built from scratch as a React single-page interactive app using Vite, React and React Router v7, with Home, Details and RSVP routes. Translated the Figma designs into a hand-written CSS design system of color variables, typography, buttons and layout utilities, pairing Adobe Fonts with Google Fonts.',
        note:        'ATTENTION: This is a live website; please do not RSVP',
        outcome:     'Live on a custom domain at theclarkeswedding.com, with the original Figma designs versioned alongside the code.',
        tags:        ['React', 'HTML', 'JavaScript', 'CSS', 'Figma', 'Adobe Fonts'],
        live:        { label: 'Visit live site', href: 'https://www.theclarkeswedding.com/' },
        code:        'https://github.com/sloholt/The-Clarkes',
      },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="projects__card">
      <div className="projects__card-body">
        <p className="projects__category">{project.category}</p>
        <h3 className="projects__title">{project.title}</h3>
        <p className="projects__description">
          {project.description}
          {project.note && <span className="projects__note">{project.note}</span>}
        </p>
      </div>

      <div className="projects__card-footer">
        <div className="projects__outcome">
          <p className="projects__outcome-label">Outcome</p>
          <p className="projects__outcome-text">{project.outcome}</p>
        </div>

        <div className="projects__tags">
          {project.tags.map(tag => <span key={tag} className="projects__tag">{tag}</span>)}
        </div>

        {project.nda ? (
          <div className="projects__nda">
            <img src="/icons/lock.svg" alt="" width="12" height="14" />
            <span className="projects__nda-title">Under NDA</span>
            <span className="projects__nda-text">· Code and detailed results are confidential</span>
          </div>
        ) : (
          <div className="projects__links">
            {project.live && (
              <a href={project.live.href} className="projects__link projects__link--live" target="_blank" rel="noreferrer">
                {project.live.label}&nbsp;&nbsp;↗
              </a>
            )}
            {project.code && (
              <a href={project.code} className="projects__link" target="_blank" rel="noreferrer">
                <img src="/icons/code.svg" alt="" width="14" height="14" />
                View code on GitHub&nbsp;&nbsp;→
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__inner">

        <header className="projects__header">
          <Badge>PROJECTS</Badge>
          <h1 className="projects__heading">Data Analysis &amp; Software Engineering</h1>
          <p className="projects__lead text-secondary">
            A collection of projects spanning statistical consulting, machine learning, data analytics,software development and financial analysis, applying technical methods to solve real-world problems across industries.
          </p>
        </header>

        <div className="projects__sections">
          {SECTIONS.map(section => (
            <div key={section.title} className="projects__section">
              <div className="projects__section-header">
                <p className="projects__eyebrow">{section.eyebrow}</p>
                <h2 className="projects__section-title">{section.title}</h2>
                <p className="projects__section-lead text-secondary">{section.lead}</p>
              </div>

              <div className="projects__grid">
                {section.projects.map(project => <ProjectCard key={project.title} project={project} />)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
