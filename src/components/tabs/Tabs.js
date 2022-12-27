import React, { useRef, useState } from 'react';
import { Pager } from './Pager';
import { useMeasure } from './useMeasure';
import { Slider, TabContainer, TabItem, TabList } from './Tabs.styled';

const tabs = ['Calendar', 'Browser', 'Store'];

export function Tabs() {
  const [value, setValue] = useState(1);
  const childRefs = useRef(new Map());
  const tabListRef = useRef();
  const [slider, setSlider] = useState({ left: 0, right: 0 });
  const { bounds, ref } = useMeasure();

  // measure our elements
  React.useEffect(() => {
    const target = childRefs.current.get(value);
    const container = tabListRef.current;
    if (target) {
      const cRect = container.getBoundingClientRect();

      // when container is `display: none`, width === 0.
      // ignore this case
      if (cRect.width === 0) {
        return;
      }

      const tRect = target.getBoundingClientRect();
      const left = tRect.left - cRect.left;
      const right = cRect.right - tRect.right;

      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      });
    }
  }, [value, bounds]);

  return (
    <div>
      <TabContainer ref={ref}>
        <TabList ref={tabListRef}>
          {tabs.map((tab, i) => (
            <TabItem
              key={tab}
              isActive={i === value}
              whileHover={{ backgroundColor: '#f1f3f5' }}
              transition={{ duration: 0.1 }}
              whileTap={{ backgroundColor: '#e9ecef' }}
              ref={el => childRefs.current.set(i, el)}
              onClick={() => setValue(i)}
            >
              {tab}
            </TabItem>
          ))}
          {slider.hasValue && (
            <Slider
              positionTransition={{
                bounceDamping: 3,
              }}
              initial={false}
              style={{
                left: slider.left,
                right: slider.right,
              }}
            />
          )}
        </TabList>
      </TabContainer>
      <Pager value={value}>
        {tabs.map(tab => (
          <div
            key={tab}
            style={{
              width: '100%',
              height: '300px',
              padding: '16px',
            }}
          >
            {tab} It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </div>
        ))}
      </Pager>
    </div>
  );
}
