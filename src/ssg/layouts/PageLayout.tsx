import React from 'react';

export const PageLayout: React.FC<{
  header: React.ReactNode;
  navigator: React.ReactNode;
  main: React.ReactNode;
  rightSidebar?: React.ReactNode;
}> = props => {
  const hasRightSidebar = !!props.rightSidebar;
  return (
    // 100% 宽度，100% 高度，垂直方向排列
    <div className="flex flex-col w-full h-full overflow-hidden items-stretch">
      {/* Header 由自身高度决定 */}
      <header className="fixed h-18 top-0 left-0 right-0 z-10 shrink-0">{props.header}</header>
      {/* 当宽度足够时，内容进行左右分栏 */}
      {/* 可伸缩的高度，超出的部分 scroll，左右对齐高度 */}
      <div className="flex mt-18 flex-col overflow-auto md:flex-row flex-1 md:overflow-hidden md:items-stretch">
        {/* 宽度由自身决定 */}
        {props.navigator && (
          <nav className="fixed left-0 top-18 bottom-0 w-88 z-9 hidden lg:block overflow-auto shrink-0">
            {props.navigator}
          </nav>
        )}
        {/* 占据剩余宽度 */}
        <main className={`w-full lg:pl-88 xl:pr-88 overflow-auto`}>{props.main}</main>
        {/* 右侧边栏 */}
        {hasRightSidebar && (
          <aside className="fixed right-0 top-18 bottom-0 w-88 hidden xl:block overflow-auto shrink-0 sidebar-right">
            {props.rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
};
