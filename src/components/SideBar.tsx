import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import routes, { bottomLinks } from 'src/assets/routes';

const SideBar: React.FC = () => {
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlTitle = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();
  const { pathname } = useLocation();

  const showMore = () => {
    controls.start({
      width: '300px',
      transition: { duration: 0.001 },
    });
    controlTitle.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 },
    });
    controlText.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: '55px',
      transition: { duration: 0.001 },
    });
    controlTitle.start({
      opacity: 0,
      display: 'none',
    });
    controlText.start({
      opacity: 0,
      display: 'none',
    });

    controlTitleText.start({
      opacity: 0,
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.aside
      animate={controls}
      className="max-w-[250px] dark:bg-slate-900 animate duration-300 border-r border-gray-700 relative flex flex-col pb-10 min-h-screen whitespace-nowrap h-screen overflow-auto"
    >
      {/* 타이틀 */}
      <div className="sticky top-0">
        <h2 className="font-thick text-white text-2xl flex items-center p-4 pb-2 dark:bg-slate-900">
          <span>
            {active && (
              <AiOutlineMenuFold
                onClick={showLess}
                className="text-2xl text-white cursor-pointer"
              />
            )}
            {!active && (
              <AiOutlineMenuUnfold
                onClick={showMore}
                className="text-2xl text-white cursor-pointer"
              />
            )}
          </span>
          <Link to="/" className="ml-2">
            {<motion.span animate={controlTitle}>Maeng&apos;s Exercise</motion.span>}
          </Link>
        </h2>

        <div className="h-4 bg-gradient-to-b from-white dark:from-slate-900 sticky top-200"></div>
      </div>
      <div className="grow">
        {routes.map((group, index) => (
          <ul key={index} className="my-2">
            {/* 메뉴 그룹 */}
            <motion.p
              animate={controlTitleText}
              className="mb-2 ml-4 text-sm font-bold text-gray-100 whitespace-nowrap"
            >
              {group.name}
            </motion.p>
            {/* 메뉴 */}
            {group.items.map((item, index2) => (
              <li key={index2} className="group cursor-pointer">
                <Link to={`${group.path}/${item.path}`} className="flex px-4 py-1">
                  <group.icon
                    className={`text-lg group-hover:text-white ${
                      pathname.includes(`${group.path}/${item.path}`)
                        ? 'text-white'
                        : 'text-gray-500'
                    }`}
                  />
                  <motion.p
                    animate={controlText}
                    className={`ml-4 text-sm font-bold group-hover:text-white ${
                      pathname.includes(`${group.path}/${item.path}`)
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}
                  >
                    {item.title}
                  </motion.p>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* 하단 */}
      <div>
        {bottomLinks.map((group, index) => (
          <ul key={index} className="my-2">
            <motion.p animate={controlTitleText} className="mb-2 ml-4 text-sm font-bold text-white">
              {group.name}
            </motion.p>

            {group.items.map((item, index2) => (
              <li key={index2} className="group cursor-pointer">
                <a
                  className="flex px-4 py-1"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="text-lg text-gray-500 group-hover:text-white" />
                  <motion.p
                    animate={controlText}
                    className="ml-4 text-sm font-bold text-gray-400 group-hover:text-white"
                  >
                    {item.title}
                  </motion.p>
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </motion.aside>
  );
};

export default SideBar;
