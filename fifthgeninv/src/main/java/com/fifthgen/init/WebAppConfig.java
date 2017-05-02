 package com.fifthgen.init;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.hibernate.ejb.HibernatePersistence;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.MediaType;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.accept.ContentNegotiationManager;
import org.springframework.web.servlet.HandlerAdapter;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.ResourceBundleViewResolver;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesView;

@Configuration
@EnableWebMvc

@ComponentScan(basePackages ={"com.fifthgen"})
@PropertySource({"classpath:db.properties"})
@EnableJpaRepositories("com.fifthgen.repository")
@EnableScheduling
//@Import({})
public class WebAppConfig  extends WebMvcConfigurerAdapter{
	
	
	//second time//
	private static final String PROPERTY_NAME_DATABASE_DRIVER = "db.driver";
	private static final String PROPERTY_NAME_DATABASE_PASSWORD = "db.password";
	private static final String PROPERTY_NAME_DATABASE_URL = "db.url";
	private static final String PROPERTY_NAME_DATABASE_USERNAME = "db.username";

	private static final String PROPERTY_NAME_HIBERNATE_DIALECT = "hibernate.dialect";
	private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL = "hibernate.show_sql";
	private static final String PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN = "entitymanager.packages.to.scan";

	
	
	@Resource
	private Environment env;

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName(env.getRequiredProperty(PROPERTY_NAME_DATABASE_DRIVER));
		dataSource.setUrl(env.getRequiredProperty(PROPERTY_NAME_DATABASE_URL));
		dataSource.setUsername(env.getRequiredProperty(PROPERTY_NAME_DATABASE_USERNAME));
		dataSource.setPassword(env.getRequiredProperty(PROPERTY_NAME_DATABASE_PASSWORD));

		return dataSource;
	}

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setDataSource(dataSource());
		entityManagerFactoryBean.setPersistenceProviderClass(HibernatePersistence.class);
		entityManagerFactoryBean
				.setPackagesToScan(env.getRequiredProperty(PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN));
		entityManagerFactoryBean.setJpaDialect(new CustomHibernateJpaDialect());
		entityManagerFactoryBean.setJpaProperties(hibProperties());

		return entityManagerFactoryBean;
	}

	private Properties hibProperties() {
		Properties properties = new Properties();
		properties.put(PROPERTY_NAME_HIBERNATE_DIALECT, env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_DIALECT));

		properties.put(PROPERTY_NAME_HIBERNATE_SHOW_SQL, env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_SHOW_SQL));
		// properties.setProperty("hibernate.connection.isolation",
		// String.valueOf(Connection.TRANSACTION_SERIALIZABLE));

		return properties;
	}

	@Bean
	public JpaTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
		return transactionManager;
	}
	//second time//
	
	

	
	//front-end  configuration initially done//
	@Override
	public void configureDefaultServletHandling(
			DefaultServletHandlerConfigurer configurer) {
	configurer.enable();
	}
	
	
	@Bean
	public TilesViewResolver getTilesViewResolver() {
		TilesViewResolver tilesViewResolver = new TilesViewResolver();
		tilesViewResolver.setViewClass(TilesView.class);
		tilesViewResolver.setOrder(1);
		return tilesViewResolver;
	}

	@Bean
	public TilesConfigurer getTilesConfigurer() {
		TilesConfigurer tilesConfigurer = new TilesConfigurer();
		tilesConfigurer.setCheckRefresh(true);
		tilesConfigurer.setDefinitions(new String[] { "/WEB-INF/tiles.xml" });
		return tilesConfigurer;
	}

	@Bean
	public UrlBasedViewResolver getViewResolver() {
		UrlBasedViewResolver resolver = new UrlBasedViewResolver();
		resolver.setPrefix("/pages/");
		resolver.setSuffix(".jsp");
		resolver.setViewClass(JstlView.class);
		// resolver.setOrder(2);
		resolver.setOrder(1);
		return resolver;
	}
	
//	//front-end  configuration initially done//
//	
//	//third time//
	@Bean
	public HandlerAdapter handlerMapping() {
		final RequestMappingHandlerAdapter ret = new RequestMappingHandlerAdapter();
		return ret;
	}

	@Bean
	public CustomInterceptor pagePopulationInterceptor() {
		return new CustomInterceptor();
	}
//
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(localeChangeInterceptor());
//		registry.addInterceptor(pagePopulationInterceptor()).addPathPatterns("/**");
//	}
//
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
		registry.addResourceHandler("/css/**").addResourceLocations("/css/");
		registry.addResourceHandler("/fileupload/**").addResourceLocations("/fileupload/");
		registry.addResourceHandler("/images/**").addResourceLocations("/images/");
		registry.addResourceHandler("/js/**").addResourceLocations("/js/");
		registry.addResourceHandler("/pages/**").addResourceLocations("/pages/");
		registry.addResourceHandler("/**").addResourceLocations("/static/");
	}

//	@Bean
//	public ResourceBundleViewResolver getExcelViewResolver() {
//		ResourceBundleViewResolver resolver = new ResourceBundleViewResolver();
//		resolver.setBasename("views");
//		resolver.setOrder(0);
//		return resolver;
//	}
//
////	@Bean
////	public FileUploadValidator FileValidator() {
////		FileUploadValidator fileUploadValidator = new FileUploadValidator();
////		return fileUploadValidator;
////	}
//
//	@Bean
//	public MultipartResolver multipartResolver() {
//		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
//		multipartResolver.setMaxUploadSize(10000000);
//		return multipartResolver;
//	}
	

/*
	 * Configure ContentNegotiationManager
	 */
	@Override
	public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
		configurer.ignoreAcceptHeader(true).defaultContentType(
				MediaType.TEXT_HTML);
	}

	/*
	 * Configure ContentNegotiatingViewResolver
	 */
	@Bean
	public ViewResolver contentNegotiatingViewResolver(ContentNegotiationManager manager) {
		ContentNegotiatingViewResolver resolver = new ContentNegotiatingViewResolver();
		resolver.setContentNegotiationManager(manager);

		// Define all possible view resolvers
		List<ViewResolver> resolvers = new ArrayList<ViewResolver>();

		//resolvers.add(jaxb2MarshallingXmlViewResolver());
		resolvers.add(jsonViewResolver());
		//resolvers.add(htmlViewResolver());
		//resolvers.add(pdfViewResolver());
		//resolvers.add(excelViewResolver());
		
		resolver.setViewResolvers(resolvers);
		return resolver;
	}

@Bean
	public ViewResolver jsonViewResolver() {
		return new JsonViewResolver();
	}

}
